const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// const fs = require("fs");

// Get User
exports.getOneUser = (req, res) => {
  userModel
    .findById(req.params.id)
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
      console.log("Get user infos");
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("ID unknow :" + err);
    });
};

exports.updateProfil = (req, res, next) => {
  const { userId, name, lastName, password } = req.body;
  console.log(password);

  if (password) {
    bcrypt.hash(password, 10).then((hash) => {
      userModel
        .findByIdAndUpdate(
          userId,
          {
            name,
            lastName,
            password: hash,
          },
          { new: true, upsert: true },
        )
        .select("-password")
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err));
    });
  } else {
    userModel
      .findByIdAndUpdate(
        userId,
        {
          name,
          lastName,
        },
        { new: true, upsert: true },
      )
      .select("-password")
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json(err));
  }
};

// Profil
exports.updateImage = async (req, res) => {
  const picture = req.file;
  const userId = req.params.id;
  // try {
  //   fs.writeFileSync(
  //     "image/" + picture.originalname + ".jpg",
  //     picture.buffer,
  //     "hex",
  //   );
  // } catch (e) {
  //   console.log(e);
  // }

  userModel
    .findByIdAndUpdate(
      userId,
      {
        image:
          `${process.env.BACKEND_IP}` +
          "/api/user/profile/" +
          picture.originalname +
          ".jpg",
      },
      { new: true, upsert: true },
    )
    .then(() =>
      res
        .status(200)
        .json(
          `${process.env.BACKEND_IP}` +
            "/api/user/profile/" +
            picture.originalname +
            ".jpg",
        ),
    )
    .catch((err) => res.status(500).json(err));
};
exports.getPicture = (req, res) => {
  const { id } = req.params;
  let userName = id;
  console.log(userName);

  return res.status(200).sendFile(userName, { root: "image/profil" }, (err) => {
    console.log(err);
  });
};

// CV
exports.updateCV = async (req, res) => {
  const picture = req.file;
  const userId = req.params.id;

  userModel
    .findByIdAndUpdate(
      userId,
      {
        CV:
          `${process.env.BACKEND_IP}` +
          "/api/user/cv/" +
          picture.originalname +
          ".jpg",
      },
      { new: true, upsert: true },
    )
    .then(() =>
      res
        .status(200)
        .json(
          `${process.env.BACKEND_IP}` +
            "/api/user/cv/" +
            picture.originalname +
            ".jpg",
        ),
    )
    .catch((err) => res.status(500).json(err));
};
exports.getCV = (req, res) => {
  const { id } = req.params;
  let userName = id;
  console.log(userName);

  return res.status(200).sendFile(userName, { root: "image/cv" }, (err) => {
    console.log(err);
  });
};
