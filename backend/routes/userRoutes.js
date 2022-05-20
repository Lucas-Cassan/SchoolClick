const router = require("express").Router();
const multer = require("multer");
// Profil
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/profil");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + ".jpg");
  },
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const upload = multer({
  storage: storage,
});
// CV
const storageCv = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/cv");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + ".jpg");
  },
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const uploadCv = multer({
  storage: storageCv,
});

// Controllers
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// User
router.get("/:id", userController.getOneUser);
router.get("/profile/:id", userController.getPicture);
router.get("/cv/:id", userController.getCV);
router.post("/update-profil", userController.updateProfil);

// Picture
router.post(
  "/update-image/:id",
  upload.single("picture"),
  userController.updateImage
);
router.post("/update-cv/:id", uploadCv.single("cv"), userController.updateCV);

module.exports = router;
