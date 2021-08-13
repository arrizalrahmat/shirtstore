const Shirt = require('../models/Shirt');

class ShirtController {
  static list(req, res) {
    Shirt.list((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render('home', { data: data, alert: req.query.alert });
      }
    });
  }

  static add(req, res) {
    const alert = req.query.alert;
    console.log(alert)
    res.render('add', { alert });
  }

  static addPost(req, res) {
    const newShirt = {
      name: req.body.name,
      type: req.body.type,
      size: req.body.size,
      stock: +req.body.stock
    }
    Shirt.insert(newShirt, (err, data) => {
      if(err){
        if(Array.isArray(err)){
            res.redirect(`/shirts/add?alert=${err}`);
        } else {
          res.send(err);
        }
      } else {
          res.redirect(`/?alert=${data}`);
      }
    });
  }

  static edit(req, res) {
    Shirt.findOne(req.params.id, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.render('edit', { data, alert: req.query.alert });
      }
    })
  }

  static editPost(req, res) {
    const updatedShirt = {
      id: +req.params.id,
      name: req.body.name,
      type: req.body.type,
      size: req.body.size,
      stock: +req.body.stock
    }
    Shirt.update(updatedShirt, (err, data) => {
      if(err){
        if(Array.isArray(err)){
            console.log(err)
            res.redirect(`/shirts/edit/${updatedShirt.id}?alert=${err}`);
        } else {
          res.send(err);
        }
      } else {
          res.redirect(`/?alert=${data}`);
      }
    });
  }

  static delete(req, res) {
    Shirt.delete(+req.params.id, (err, data) => {
      if(err){
        if(Array.isArray(err)){
          res.redirect(`/?alert=${err}`);
        } else {
          res.send(err);
        }
      } else {
        res.redirect(`/?alert=${data}`);
    }
    });
  }
}

module.exports = ShirtController;
