package visa.jawas.hack.project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String index(){
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
