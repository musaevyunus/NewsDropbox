const News = require("../models/news.model");

module.exports.newsController = {
  addNews: (req, res) => {
    News.create({title: req.body.title, text: req.body.text, category: req.body.category})
    .then((data) => {
      res.json(data);
    });
  },

  deleteNews: (req, res) => {
    News.findByIdAndRemove(req.params.id).then((data) => {
      res.json(data);
    });
  },

  patchNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((data) => {
      res.json(data);
    });
  },

  getOneNews: (req, res) => {
    News.find(req.params.id).then((data) => {
      res.json(data);
    }).catch(() => res.json('error'))
  },

  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    }).catch(() => res.json('error'))
  },


getCatNews: (req, res) => {
    News.find(req.params.id).then((data) => {
      res.json(data);
    }).catch(() => res.json('error'))
  },
};





  