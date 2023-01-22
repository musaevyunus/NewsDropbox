const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: (req, res) => {
    Category.create({ name: req.body.name})
    .then((data) => {
      res.json(data)
    }).catch(() => {
        res.json("error")
    })
  },

  deleteCategory: (req, res) => {
    Category.findByIdAndDelete(req.params.id).then(() => {
      res.json("Категория удалена");
    })
    .catch(() => res.json("error"))
  },
  getCategory: (req, res) => {
    Category.find({}).then((data) => {
      res.json(data)})
      .catch(() => res.json("error"))
    }
  };

  
