package visa.jawas.hack.project.dbconfig;
import org.springframework.stereotype.Component;

/**
 * Represents a row of data in the MySQL database.
 */
@Component
public class InputRecord {
    private Integer id;
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
