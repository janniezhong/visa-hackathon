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
    private String company_name;
    private String address;
    private String city;
    private String state;
    private String country;
    private String phone;
    private String email;
    private Double amount_loaned;
    private String payment_plan;
    private Timestamp issue_date;
    private Timestamp expected_end_date;
    private Timestamp next_inspection_date;
    private String loan_officer;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

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

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }


    public Double getAmount_loaned() {
        return amount_loaned;
    }

    public void setAmount_loaned(Double amount_loaned) {
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

    @Override
    public String toString() {
        return "InputRecord{" +
                "pan='" + pan + '\'' +
                ", card_id='" + card_id + '\'' +
                ", company_name='" + company_name + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", amount_loaned=" + amount_loaned +
                ", payment_plan='" + payment_plan + '\'' +
                ", issue_date=" + issue_date +
                ", expected_end_date=" + expected_end_date +
                ", next_inspection_date=" + next_inspection_date +
                ", loan_officer='" + loan_officer + '\'' +
                '}';
    }
}
