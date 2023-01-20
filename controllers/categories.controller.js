const Category = require("../models/categories.model");

module.exports.categoriesController = {
  addCategory: (req, res) => {
    Category.create({ name: req.body.name})
    .then((data) => {
      res.json(data)
    }).catch((data) => {
        res.json(data)
    })
  },

  deleteCategory: (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(() => {
      res.json("Категория удалена");
    });
  },
  getCategory: (req, res) => {
    Category.find().then(() => {
      res.json("Категория возвращена");
    });
  },

  
};