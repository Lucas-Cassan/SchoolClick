// Get User
const userModel = require("../models/userModel");
const fs = require("fs");

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

exports.getPicture = (req, res) => {
  const { id } = req.params;
  let userName = id;
  console.log(userName);

  return res.status(200).sendFile(userName, { root: "image" }, (err) => {
    console.log(err);
  });
};

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
