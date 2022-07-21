const AbstractManager = require("./AbstractManager");

class AllProjectManager extends AbstractManager {
  static table = "project";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = AllProjectManager;
