const router = require("express").Router();

// Controllers
const swipeController = require("../controllers/swipeController");

router.get("/getSchool/:id", swipeController.getSchool);
router.get("/getList/:id", swipeController.getListSchool);
router.post("/createSchool", swipeController.createSchool);
router.post("/like", swipeController.likeOrNope);

module.exports = router;
