package visa.jawas.hack.project.Entities;

import org.springframework.stereotype.Component;

public class Loan {
    String name;
    int cardNum;
    int balance;

    public Loan(String name, int cardNum, int balance) {
        this.name = name;
        this.cardNum = cardNum;
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public int getCardNum() {
        return cardNum;
    }

    public int getBalance() {
        return balance;
    }
}
