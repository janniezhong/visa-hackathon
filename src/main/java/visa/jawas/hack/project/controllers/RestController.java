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
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
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
    private static final String KEY_STORE_PATH = "C:/Program Files/Java/jdk-14.0.1/lib/security/visaKeystore.jks";
    private static final String PRIVATE_KEY_PASSWORD = "TqK123QPiBAU9i2h3z";
    private static final String TRUST_STORE_PASSWORD = "changeit";
    private static final String TRUST_STORE_PATH = "C:/Program Files/Java/jdk-14.0.1/lib/security/cacerts.jks";

    @Autowired
    public RestController() throws KeyStoreException, IOException, CertificateException, NoSuchAlgorithmException, UnrecoverableKeyException, KeyManagementException {
        context = new ClassPathXmlApplicationContext("Beans.xml");
        inputJDBCTemplate = (InputJDBCTemplate) context.getBean("inputJDBCTemplate");
        KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
        InputStream keyStoreData = new FileInputStream(KEY_STORE_PATH);
        ks.load(keyStoreData, KEY_STORE_PASSWORD.toCharArray());
        SSLContext sslcontext = SSLContexts.custom()
                .loadKeyMaterial(new File(KEY_STORE_PATH), KEY_STORE_PASSWORD.toCharArray(),KEY_STORE_PASSWORD.toCharArray())
                .loadTrustMaterial(new File(KEY_STORE_PATH), KEY_STORE_PASSWORD.toCharArray())
                .build();

        System.out.println(SSLContexts.custom()
                .loadKeyMaterial(new File(KEY_STORE_PATH), KEY_STORE_PASSWORD.toCharArray(),KEY_STORE_PASSWORD.toCharArray())
                .loadTrustMaterial(new File(KEY_STORE_PATH), KEY_STORE_PASSWORD.toCharArray())
                );
        // Allow TLSv1.2 protocol only
        SSLConnectionSocketFactory sslSocketFactory = new SSLConnectionSocketFactory(sslcontext, new String[]{"TLSv1.2"}, null,
                SSLConnectionSocketFactory.getDefaultHostnameVerifier());

        httpClient = HttpClients.custom()
                .setSSLSocketFactory(sslSocketFactory).build();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/RestController/homepage", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<Object> getAll() throws IOException, JSONException {
        System.out.println("Inside of getAll()");
        List<InputRecord> inputRecords = inputJDBCTemplate.listRecords();
        List<HttpResponse> responses = new ArrayList<>();
        for (InputRecord record : inputRecords) {
            responses.add(getCardInfo(record.getCard_id()));
        }
        return new ResponseEntity<>(inputRecords, HttpStatus.OK);
    }

    private HttpResponse getCardInfo(String cardId) throws IOException, JSONException {
        System.out.println("Inside of getCardInfo() : " + cardId);
        HttpGet httpGet = new HttpGet("https://sandbox.api.visa.com/dcas/cardservices/v1/cards/"
                + cardId + "?lookUpBalances=true");
        System.out.println("https://sandbox.api.visa.com/dcas/cardservices/v1/cards/"
                + cardId + "?lookUpBalances=true");
        HttpResponse httpResponse = httpClient.execute(httpGet);
        StringBuilder textBuilder = new StringBuilder();
        try (Reader reader = new BufferedReader(new InputStreamReader
                (httpResponse.getEntity().getContent(), Charset.forName(StandardCharsets.UTF_8.name())))) {
            int c = 0;
            while ((c = reader.read()) != -1) {
                textBuilder.append((char) c);
            }
        }
        return httpResponse;
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/RestController/createLoan", method = RequestMethod.POST)
    public String createLoan(@RequestBody Loan loan) throws IOException, JSONException {
        HttpPost httpPost = new HttpPost("https://sandbox.api.visa.com/dcas/cardservices/v1/cards");
        String body = "{\"cardIdModel\":[{\"pan\":\"" + loan.getCardNum()
                + "\",\"lookUpBalances\":true}]}";
        StringEntity entity = entity = new StringEntity(body);
        httpPost.setEntity(entity);
        HttpResponse httpResponse = httpClient.execute(httpPost);
        HttpEntity response = httpResponse.getEntity();
        if (response != null) {
            String src = EntityUtils.toString(response);
            JSONObject result = new JSONObject(src);
            System.out.println(result);
            return result.getJSONObject("resources").getJSONArray("cards").getJSONObject(0).getJSONObject("cardId").toString();
        }
        return null;
    }
}
