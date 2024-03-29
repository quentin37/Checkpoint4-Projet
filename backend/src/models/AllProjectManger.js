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

  insert(NewProject) {
    return this.connection.query(
      `insert into ${AllProjectManager.table}  (title, description, image, repot, date, category_id) values (?,?,?,?,?,?)`,
      [
        NewProject.title,
        NewProject.description,
        NewProject.image,
        NewProject.repot,
        NewProject.date,
        NewProject.category_id,
      ]
    );
  }

  update(editProject) {
    return this.connection.query(
      `update ${AllProjectManager.table} set ? where id = ?`,
      [editProject, editProject.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = AllProjectManager;
