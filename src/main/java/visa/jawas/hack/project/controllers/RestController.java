package visa.jawas.hack.project.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import visa.jawas.hack.project.Entities.Loan;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @CrossOrigin
    @RequestMapping(value="/RestController/homepage", method= RequestMethod.GET)
    public @ResponseBody ResponseEntity<Object> getAll() {
        return null;
    }

    @CrossOrigin
    @RequestMapping(value="/RestController/createLoan", method= RequestMethod.POST)
    public String createLoan(@RequestBody Loan loan) {
        return null;
    }

}
