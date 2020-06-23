package visa.jawas.hack.project.dbconfig;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Maps a MySQL row to an InputRecord object.
 */
public class InputMapper implements RowMapper<InputRecord>{

    @Override
    public InputRecord mapRow(ResultSet rs, int i) throws SQLException {
        InputRecord input = new InputRecord();
        input.setId(rs.getInt("id"));
        input.setName(rs.getString("name"));

        return input;
    }
}
