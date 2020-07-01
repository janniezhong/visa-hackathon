package visa.jawas.hack.project.dbconfig;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

/**
 * Maps a MySQL row to an InputRecord object.
 */
public class InputMapper implements RowMapper<InputRecord>{

    @Override
    public InputRecord mapRow(ResultSet rs, int i) throws SQLException {
        InputRecord input = new InputRecord();

        input.setPan(rs.getString("pan"));
        input.setCard_id(rs.getString("card_id"));
        input.setCompany_name(rs.getString("company_name"));
        input.setAddress(rs.getString("address"));
        input.setCity(rs.getString("city"));
        input.setState(rs.getString("state"));
        input.setCountry(rs.getString("country"));
        input.setPhone(rs.getString("phone"));
        input.setEmail(rs.getString("email"));
        input.setAmount_loaned(rs.getDouble("amount_loaned"));
        input.setPayment_plan(rs.getString("payment_plan"));
        input.setIssue_date(rs.getTimestamp("issue_date"));
        input.setExpected_end_date(rs.getTimestamp("expected_end_date"));
        input.setNext_inspection_date(rs.getTimestamp("next_inspection_date"));
        input.setLoan_officer(rs.getString("loan_officer"));

        return input;
    }
}
