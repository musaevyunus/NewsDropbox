const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews);
router.delete("/news", newsController.deleteNews);
router.patch("/news", newsController.patchNews);
router.get("/news", newsController.getOneNews);
router.get("/news", newsController.getNews);
router.get("/news", newsController.getCatNews);

module.exports = router;