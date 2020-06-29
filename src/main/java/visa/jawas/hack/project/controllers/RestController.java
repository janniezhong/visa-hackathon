package visa.jawas.hack.project.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import visa.jawas.hack.project.Entities.Loan;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class RestController {

    @RequestMapping(value="/rest/get", method= RequestMethod.GET)
    public @ResponseBody ResponseEntity<Object> getAll() {
        return null;
    }

    @RequestMapping(value="/rest/createLoan", method= RequestMethod.POST)
    public String createLoan(@RequestBody Loan loan) {
        return null;
    }

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity handle() {
        return new ResponseEntity(HttpStatus.OK);
    }

}
