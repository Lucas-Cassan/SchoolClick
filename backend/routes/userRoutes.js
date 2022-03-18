const router = require("express").Router();

// Controllers
const authController = require("../controllers/authController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;