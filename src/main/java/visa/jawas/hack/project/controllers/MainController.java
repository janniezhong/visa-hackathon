package visa.jawas.hack.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import visa.jawas.hack.project.dbconfig.InputJDBCTemplate;

import java.sql.Date;
import java.sql.Timestamp;

@Controller
public class MainController {

    ApplicationContext context;
    InputJDBCTemplate inputJDBCTemplate;

    @Autowired
    public MainController() {
        context = new ClassPathXmlApplicationContext("Beans.xml");
        inputJDBCTemplate = (InputJDBCTemplate)context.getBean("inputJDBCTemplate");
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String index(){
        Timestamp time = new Timestamp(System.currentTimeMillis());
        inputJDBCTemplate.create("pan", "card_id", "US", "California","Sunnyvale", "Apple, Inc.", 6000, time, "one-time", time, time, "John Doe");
        return("home");
    }

    @RequestMapping(path = "/home", method = RequestMethod.GET)
    public String home(){
        return("home");
    }
    @RequestMapping(path = "/login", method = RequestMethod.GET)
    public String login(){
        return("login");
    }
    @RequestMapping(path = "/hello", method = RequestMethod.GET)
    public String hello(){
        return("hello");
    }


}
