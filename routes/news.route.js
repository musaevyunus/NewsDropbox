const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.patchNews);
router.get("/news/:id", newsController.getOneNews);
router.get("/news", newsController.getNews);
router.get("/news/category/:categoryId", newsController.getCatNews);

module.exports = router;