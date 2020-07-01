package visa.jawas.hack.project.dbconfig;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;

import javax.sql.DataSource;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;


/**
 * Represents a template to interact with the database.
 */
public class InputJDBCTemplate implements InputRecordDAO {
    private DataSource dataSource;
    private SimpleJdbcCall jdbcCall;
    private  JdbcTemplate jdbcTemplateObject;

    /**
     * @param dataSource the DataSource to interact with.
     */
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcCall =  new SimpleJdbcCall(dataSource).withProcedureName("getRecord");
    }

    @Override
    public void create(String pan,
                       String card_id,
                       String company_name,
                       String address,
                       String city,
                       String country,
                       String state,
                       String phone,
                       String email,
                       Integer amount_loaned,
                       String payment_plan,
                       Timestamp issue_date,
                       Timestamp expected_end_date,
                       Timestamp next_inspection_date,
                       String loan_officer) {
        jdbcTemplateObject = new JdbcTemplate(dataSource);
        String SQL = "insert into input (pan, card_id, company_name, address, city, state, country, phone, email, amount_loaned, payment_plan, issue_date, expected_end_date, next_inspection_date, loan_officer) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplateObject.update(SQL, pan, card_id, company_name, address, city, state, country, phone, email, amount_loaned, payment_plan, issue_date, expected_end_date, next_inspection_date, loan_officer);
        System.out.println("Created Record!");
        return;
    }

//    @Override
//    public InputRecord getRecord(Integer id) {
//
//        SqlParameterSource in = new MapSqlParameterSource().addValue("in_id", id);
//        Map<String, Object> out = jdbcCall.execute(in);
//
//
//        InputRecord input = new InputRecord();
//        input.setId(id);
//        input.setName((String) out.get("name"));
//        return input;
//
//    }

    @Override
    public List<InputRecord> listRecords() {
        String SQL = "select * from Input";
        List <InputRecord> records = jdbcTemplateObject.query(SQL, new InputMapper());
        return records;
    }


}
