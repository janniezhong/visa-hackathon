package visa.jawas.hack.project.dbconfig;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

/**
 * Represents a row of data in the MySQL database.
 */
@Component
public class InputRecord {
    private String pan;
    private String card_id;
    private String country;
    private String state;
    private String city;
    private String company_name;
    private Integer amount_loaned;
    private Timestamp issue_date;
    private String payment_plan;
    private Timestamp expected_end_date;
    private Timestamp next_inspection_date;
    private String loan_officer;

    public String getPan() {
        return pan;
    }

    public void setPan(String pan) {
        this.pan = pan;
    }

    public String getCard_id() {
        return card_id;
    }

    public void setCard_id(String card_id) {
        this.card_id = card_id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String name) {
        this.company_name = company_name;
    }


    public Integer getAmount_loaned() {
        return amount_loaned;
    }

    public void setAmount_loaned(Integer amount_loaned) {
        this.amount_loaned = amount_loaned;
    }

    public Timestamp getIssue_date() {
        return issue_date;
    }

    public void setIssue_date(Timestamp issue_date) {
        this.issue_date = issue_date;
    }

    public String getPayment_plan() {
        return payment_plan;
    }

    public void setPayment_plan(String payment_plan) {
        this.payment_plan = payment_plan;
    }

    public Timestamp getExpected_end_date() {
        return expected_end_date;
    }

    public void setExpected_end_date(Timestamp expected_end_date) {
        this.expected_end_date = expected_end_date;
    }

    public Timestamp getNext_inspection_date() {
        return next_inspection_date;
    }

    public void setNext_inspection_date(Timestamp next_inspection_date) {
        this.next_inspection_date = next_inspection_date;
    }

    public String getLoan_officer() {
        return loan_officer;
    }

    public void setLoan_officer(String loan_officer) {
        this.loan_officer = loan_officer;
    }
}
