const AbstractManager = require("./AbstractManager");

class AllProjectManager extends AbstractManager {
  static table = "project";

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = AllProjectManager;
