package visa.jawas.hack.project.dbconfig;

import javax.sql.DataSource;
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
    void create(String name);

    /**
     * Lists a record from the Input table corresponding to a passed Input id.
     */
    InputRecord getRecord(Integer id);

    /**
     * Lists all the records from the Input table.
     */
    List<InputRecord> listRecords();
}
