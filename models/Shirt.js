const db = require('../config/connection');

class Shirt {
  constructor(id, name, type, size, stock) {
    this.id = id,
    this.name = name,
    this.type = type,
    this.size = size,
    this.stock = stock
  }

  static list(callback) {
    const selectQuery = `SELECT * FROM "shirts" ORDER BY "id"`;
    db.query(selectQuery, (err, res) => {
      if (err) {
        callback(err);
      } else {
        const data = [];
        res.rows.forEach((item) => {
          data.push(new Shirt(
            item.id,
            item.name,
            item.type,
            item.size,
            item.stock
          ));
        });

        callback(null, data);
      }
    });
  }

  static insert(newShirt, callback) {
    const error = this.validate(newShirt);
    if (error.length > 0) {
      callback(error);
    } else {
      const insertShirtQuery = `INSERT INTO "shirts" (name, type, size, stock) VALUES ($1, $2, $3, $4);`;
      const params = [newShirt.name, newShirt.type, newShirt.size, newShirt.stock];
      db.query(insertShirtQuery, params, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, `New shirt with name "${newShirt.name}" has been added!`);
        }
      });
    }
  }

  static findOne(id, callback) {
    const selectQuery = `SELECT * FROM "shirts" WHERE id = $1`;
    const params = [id];
    db.query(selectQuery, params, (err, res) => {
      if (err) {
        callback(err);
      } else {
        if (res.rows[0]) {
          const shirt = new Shirt(
            res.rows[0].id,
            res.rows[0].name,
            res.rows[0].type,
            res.rows[0].size,
            res.rows[0].stock
          );

          callback(null, shirt);
        } else {
          callback('Id not found')
        }
      }
    });
  }

  static update(updatedShirt, callback) {
    const error = this.validate(updatedShirt);
    if (error.length > 0) {
      callback(error);
    } else {
      const updateShirtQuery = `UPDATE "shirts" SET name=$1, type=$2, size=$3, stock=$4 WHERE id=$5`;
      const params = [updatedShirt.name, updatedShirt.type, updatedShirt.size, updatedShirt.stock, updatedShirt.id];
      console.log(updateShirtQuery)
      db.query(updateShirtQuery, params, (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, `Shirt with name "${updatedShirt.name}" has been updated!`);
        }
      });
    }
  }

  static delete(id, callback){
    console.log(typeof id)
    this.findOne(id, (err, data)=> {
      if(data.stock !== 0){
        callback(['You can only delete shirt with stock 0'], null);
      } else{
        const query = `DELETE FROM "shirts" where id= ${data.id}`;
        db.query(query, (err, res)=>{
          if(err){
            callback(err, null);
          } else {
            callback(null, `Shirt with id "${id}" has been deleted!`);
          }
        });
      }
    });
  }

  static validate(shirt) {
    const error = [];

    if (!shirt.name) {
      error.push('Name must be filled');
    }

    if (!shirt.type) {
      error.push('Type must be filled');
    }

    if (!shirt.size) {
      error.push('Size must be filled');
    }

    if (isNaN(shirt.stock) && (shirt.stock !== 0)) {
      error.push('Size must be a number')
    }

    if (shirt.name.split(' ').length < 2) {
      error.push('Name must contain minimal 2 words');
    }

    if (shirt.stock < 0 || shirt.stock > 100) {
      error.push('Stock must be between minimal 0 to 100');
    }

    return error;
  }
}

module.exports = Shirt;
