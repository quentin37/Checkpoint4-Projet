const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(editProfil) {
    return this.connection.query(
      `update ${ProfilManager.table} set ? where id = ?`,
      [editProfil, editProfil.id]
    );
  }
}

module.exports = ProfilManager;
