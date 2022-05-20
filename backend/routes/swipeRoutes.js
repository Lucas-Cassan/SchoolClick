const router = require("express").Router();

// Controllers
const swipeController = require("../controllers/swipeController");

router.get("/getSchool/:id", swipeController.getSchool);
router.get("/getList/:id", swipeController.getListSchool);
router.post("/createSchool", swipeController.createSchool);

module.exports = router;
