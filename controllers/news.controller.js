const News = require("../models/News.model");

module.exports.newsController = {
  addNews: (req, res) => {
    News.create({title: req.body.title,
       text: req.body.text,
        categoryId: req.body.categoryId})
    .then((data) => {
      res.json(data)})
      .catch(() => res.json("error"));
  
  },

  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params.id).then((news) => {
      res.json(news);
    })
      .catch(() => res.json("error"));
    },

  patchNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, 
      {title: req.body.title,
       text: req.body.text,
       categoryId: req.body.categoryId
    }).then((news) => {
      res.json(news);})
      .catch(() => res.json("error"))
    
  },

  getOneNews: (req, res) => {
    News.findById(req.params.id).then((news) => {
      res.json(news);
    }).catch(() => res.json('error'))
  },

  getNews: (req, res) => {
    News.find().populate('category')
    .then((news) => {
      res.json(news);
    }).catch(() => res.json('error'))
  },


getCatNews: (req, res) => {
    News.find({category: req.params.categoryId}).then((news) => {
      res.json(news);
    }).catch(() => res.json('error'))
  },
};




  