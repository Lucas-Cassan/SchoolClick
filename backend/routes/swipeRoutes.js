const router = require("express").Router();

// Controllers
const swipeController = require("../controllers/swipeController");

router.get("/getSchool", swipeController.getSchool);
router.get("/getList", swipeController.getListSchool);
router.post("/createSchool", swipeController.createSchool);

module.exports = router;