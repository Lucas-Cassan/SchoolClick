const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + ".jpg");
  },
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const upload = multer({
  storage: storage,
});

// Controllers
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// User
router.get("/:id", userController.getOneUser);
router.post(
  "/update-image/:id",
  upload.single("picture"),
  userController.updateImage
);
router.get("/profile/:id", userController.getPicture);

module.exports = router;
