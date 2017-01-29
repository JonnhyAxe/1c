package test

import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Before
import org.junit.Test
import orsql.ConnectOptions
import orsql.MariaDBConnection

class MariaDBConnectionTest {
    var connection: MariaDBConnection? = null

    @Before
    fun connect() {
        val options = ConnectOptions("localhost", 3306, "test", "root", "wizawu3306")
        connection = MariaDBConnection(options)
    }

    @Test
    fun ensureTable() {
        connection!!.ensureTable("user")
    }

    @Test
    fun ensureColumn() {
        connection!!.ensureColumn("user", "firstname", "VARCHAR(64)")
        connection!!.ensureColumn("user", "lastname", "VARCHAR(64)")
    }

    @Test
    fun ensureIndex() {
        connection!!.ensureIndex("user", arrayOf("firstname", "lastname"))
    }

    @Test
    fun ensureUniqueIndex() {
        connection!!.ensureUniqueIndex("user", arrayOf("id"))
    }

    @Test
    fun one() {
        val user = connection!!.one<User>(
                User::class.java,
                "SELECT * FROM user WHERE lastname = ?",
                arrayOf("Zhang")
        )
        assertEquals(user!!.firstname, "Jenny")
        assertEquals(user.age, 16)
    }

    @Test
    fun list() {
        val users = connection!!.list<User>(
                User::class.java,
                "SELECT * FROM user WHERE age = ?",
                arrayOf(17)
        )
        assertEquals(users.size, 2)
        assertEquals(users[0].lastname.toLowerCase(), "wu")
    }

    @Test
    fun save() {
        val user = User("Harold", "Finch", 20)
        connection!!.save("user", user, "firstname")
        assertNotNull(connection!!.one<User>(
                User::class.java,
                "SELECT * FROM user WHERE lastname = ?",
                arrayOf("Finch")
        ))
        assertEquals(connection!!.list<User>(
                User::class.java,
                "SELECT * FROM user WHERE lastname = ?",
                arrayOf("Finch")
        ).size, 1)
    }

    @After
    fun close() {
        connection!!.close()
    }
}
