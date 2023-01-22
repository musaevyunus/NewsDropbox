const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: (req, res) => {
    Comment.create({ 
    name: req.body.name,
    text: req.body.text,
    newsId: req.params.id})
    .then((data) => {
      res.json(data);
    })
    .catch(() => res.json("error"))
  },

  deleteComment: (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then(() => {
      res.json("Комментарий удален");
    })
    .catch(() => res.json('error'))
  },
  getComment: (req, res) => {
    Comment.find({newsId: req.params.id}).then((data) => {
      res.json(data)}).catch(() => res.json('error')
    );
  },

  
};