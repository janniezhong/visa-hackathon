package visa.jawas.hack.project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(){
        return("home");
    }
    @GetMapping("/home")
    public String home(){
        return("home");
    }
//    @GetMapping("/login")
//    public String login(){
//        return("login");
//    }
//    @GetMapping("/")
//    public String hello(){
//        return("hello");
//    }


}
