const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");

const router = Router();

router.post("/categories", categoriesController.addCategory);
router.delete("/categories/:id", categoriesController.deleteCategory);
router.get("/categories", categoriesController.getCategory);

module.exports = router;