const Comment = require("../models/comments.model");

module.exports.commentsController = {
  addComment: (req, res) => {
    Comment.create({ 
    name: req.body.name,
    text: req.body.text,
    newsId: req.params.id})
    .then((data) => {
      res.json(data);
    });
  },

  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Комментарий удален");
    });
  },
  getComment: (req, res) => {
    Comment.find({NewsId: req.params.id}).then((data) => {
      res.json(data)}).catch(() => res.json('error')
    );
  },

  
};