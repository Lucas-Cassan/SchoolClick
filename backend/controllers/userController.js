// Get User
const userModel = require("../models/userModel");

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
      { image: "../image/" + picture.originalname + ".jpg" },
      { new: true, upsert: true },
    )
    .then((user) => console.log(user))
    .catch((err) => res.status(500).json(err));
};
