package visa.jawas.hack.project.dbconfig;

import javax.sql.DataSource;
import java.sql.Timestamp;
import java.util.List;

/**
 * Interface containing the methods to interact with a database.
 */
public interface InputRecordDAO {
    /**
     * Initialize database resources ie. connection.
     */
    void setDataSource(DataSource ds);

    /**
     * Creates a record in the Input table.
     */
    void create(String pan,
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
                String loan_officer);


    /**
     * Lists a record from the Input table corresponding to a passed Input id.
     */
    //InputRecord getRecord(Integer id);

    /**
     * Lists all the records from the Input table.
     */
    List<InputRecord> listRecords();
}
