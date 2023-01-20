const { Router} = require("express");
const { commentsController} = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsController.addComment);
router.delete("/comments", commentsController.deleteComment);
router.get("/comments", commentsController.getComment);

module.exports = router;

