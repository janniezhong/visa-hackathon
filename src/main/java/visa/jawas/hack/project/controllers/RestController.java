package visa.jawas.hack.project.controllers;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import visa.jawas.hack.project.Entities.Loan;
import org.apache.http.ssl.SSLContexts;
import visa.jawas.hack.project.dbconfig.InputJDBCTemplate;
import visa.jawas.hack.project.dbconfig.InputRecord;
import javax.net.ssl.SSLContext;
import java.io.*;
import java.net.URI;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    ApplicationContext context;
    InputJDBCTemplate inputJDBCTemplate;
    CloseableHttpClient httpClient;

    private static final String KEY_STORE_PASSWORD = "changeit";
    private static final String KEY_STORE_PATH = "C:\\Program Files\\Java\\jdk-14.0.1\\lib\\security\\cacerts.jks";
    private static final String PRIVATE_KEY_PASSWORD = "";

    @Autowired
    public RestController() throws KeyStoreException, IOException, CertificateException, NoSuchAlgorithmException {
        context = new ClassPathXmlApplicationContext("Beans.xml");
        inputJDBCTemplate = (InputJDBCTemplate)context.getBean("inputJDBCTemplate");
        SSLContext sslcontext = null;
        KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
        InputStream keyStoreData = new FileInputStream(KEY_STORE_PATH);
        ks.load(keyStoreData, KEY_STORE_PASSWORD.toCharArray());
        {
            try {
                sslcontext = SSLContexts.custom()
                        .loadTrustMaterial(new File(KEY_STORE_PATH), KEY_STORE_PASSWORD.toCharArray())
                        .loadKeyMaterial(ks, KEY_STORE_PASSWORD.toCharArray())
                        .build();
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
            } catch (KeyManagementException e) {
                e.printStackTrace();
            } catch (KeyStoreException e) {
                e.printStackTrace();
            } catch (UnrecoverableKeyException e) {
                e.printStackTrace();
            } catch (CertificateException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // Allow TLSv1.2 protocol only
        SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(sslcontext, new String[] { "TLSv1.2" }, null,
                SSLConnectionSocketFactory.getDefaultHostnameVerifier());

        CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLSocketFactory(sslSocketFactory).build();
    }

    //SSL still needs to be properly configured
    // Load client certificate into key store

//    SSLConfiguration sslConfiguration = new SSLConfiguration();
//    sslConfiguration.setKeyStore(keyStoreFile);
//    sslConfiguration.setKeyStorePassword(keyStorePwd);
//    sslConfiguration.setTrustStore(trustStoreFile);
//    sslConfiguration.setTrustStorePassword(trustStorePwd);
//    sslConfiguration.setAllowAllHosts(true);

    @CrossOrigin
    @RequestMapping(value="/RestController/homepage", method= RequestMethod.GET)
    public @ResponseBody ResponseEntity<Object> getAll() {
        List<InputRecord> inputRecords = inputJDBCTemplate.listRecords();
        List<HttpResponse> responses = new ArrayList<>();
        for (InputRecord record : inputRecords){
            responses.add(getCardInfo(record.getCard_id()));
        }
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    private HttpResponse getCardInfo(String cardId){
        HttpGet httpGet = new HttpGet("https://sandbox.api.visa.com/dcas/cardservices/v1/cards/"
                + cardId + "?lookUpBalances=true");
        HttpResponse httpResponse = null;
        try {
            httpResponse = httpClient.execute(httpGet);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return httpResponse;
    }

    @CrossOrigin
    @RequestMapping(value="/RestController/createLoan", method= RequestMethod.POST)
    public String createLoan(@RequestBody Loan loan) throws IOException, JSONException {
        HttpPost httpPost = new HttpPost("https://sandbox.api.visa.com/dcas/cardservices/v1/cards");
        String body = "{\"cardIdModel\":[{\"pan\":\"" + loan.getCardNum()
                + "\",\"lookUpBalances\":true}]}";
        StringEntity entity = entity = new StringEntity(body);
        httpPost.setEntity(entity);
        HttpResponse httpResponse = httpClient.execute(httpPost);
        HttpEntity response = httpResponse.getEntity();
        if(response != null){
            String src = EntityUtils.toString(response);
            JSONObject result = new JSONObject(src);
            return result.getJSONObject("resources").getJSONArray("cards").getJSONObject(0).getJSONObject("cardId").toString();
        }
        return null;
    }

}
