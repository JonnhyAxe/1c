"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate;
var MysqlDataSource = com.mysql.cj.jdbc.MysqlDataSource;
var RowMapper = Java.type("org.springframework.jdbc.core.RowMapper");
exports.BIGINT = "BIGINT";
exports.BOOL = "BOOL";
exports.TEXT = "TEXT";
exports.VARCHAR = function (length) { return "VARCHAR(" + length + ")"; };
exports.rowMapper = new RowMapper(function (resultSet) {
    var json = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnName(i);
        var type = resultSet.getMetaData().getColumnTypeName(i);
        if (resultSet.getObject(i) == null) {
            json[key] = null;
        }
        else if (type.toUpperCase() === "JSON") {
            json[key] = JSON.parse(resultSet.getString(i));
        }
        else {
            json[key] = resultSet.getObject(i);
        }
    }
    return json;
});
var Client = (function () {
    function Client(options, defaultRowMapper) {
        var host = options.host, port = options.port, database = options.database, user = options.user, password = options.password;
        var url = "jdbc:mysql://" + host + ":" + port + "/" + database + "?user=" + user + "&password=" + password;
        url += "&characterEncoding=" + (options.characterEncoding || "UTF-8");
        if (options.autoReconnect !== undefined) {
            url += "&autoReconnect=" + options.autoReconnect;
        }
        if (options.testOnBorrow !== undefined) {
            url += "&testOnBorrow=" + options.testOnBorrow;
        }
        if (options.useSSL !== undefined) {
            url += "&useSSL=" + options.useSSL;
        }
        var dataSource = new MysqlDataSource();
        dataSource.setURL(url);
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.defaultRowMapper = defaultRowMapper || exports.rowMapper;
    }
    Client.prototype.ensureTable = function (table, pkey, type) {
        this.jdbcTemplate.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (" + pkey + " " + type + " PRIMARY KEY)\n        ");
    };
    Client.prototype.query = function (sql, args) {
        if (args === undefined) {
            return this.jdbcTemplate.query(sql, this.defaultRowMapper);
        }
        else {
            return this.jdbcTemplate.query(sql, args, this.defaultRowMapper);
        }
    };
    Client.prototype.queryForObject = function (sql, args) {
        if (args === undefined) {
            return this.jdbcTemplate.queryForObject(sql, this.defaultRowMapper);
        }
        else {
            return this.jdbcTemplate.queryForObject(sql, args, this.defaultRowMapper);
        }
    };
    Client.prototype.ensureColumn = function (table, column, type) {
        var columns = Java.from(this.query("SHOW COLUMNS FROM " + table));
        if (columns.some(function (col) { return col.COLUMN_NAME === column; }))
            return;
        this.jdbcTemplate.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
    };
    Client.prototype.ensureIndex = function (table, columns, options) {
        if (options === void 0) { options = { unique: false }; }
        var index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_");
        var indexes = Java.from(this.query("SHOW INDEX FROM " + table));
        if (indexes.some(function (idx) { return idx.INDEX_NAME === index; }))
            return;
        this.jdbcTemplate.execute("\n            CREATE " + (options.unique ? "UNIQUE" : "") + " INDEX " + index + " ON " + table + "(" + columns.join(",") + ")\n        ");
    };
    Client.prototype.ensureUniqueIndex = function (table, columns) {
        this.ensureIndex(table, columns, { unique: true });
    };
    Client.prototype.insert = function (table, object, options) {
        if (options === void 0) { options = { upsert: false }; }
        var keys = Object.keys(object).join(",");
        var values = Object.keys(object).map(function () { return "?"; }).join(",");
        this.jdbcTemplate.update((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table + "(" + keys + ") VALUES(" + values + ")", Object.keys(object).map(function (key) {
            var value = object[key];
            if (typeof value === "object") {
                return value === null ? null : JSON.stringify(value);
            }
            else {
                return value;
            }
        }));
    };
    Client.prototype.upsert = function (table, object) {
        this.insert(table, object, { upsert: true });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=index.js.map