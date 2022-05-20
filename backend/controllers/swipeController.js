const School = require("../models/schoolModel");
const User = require("../models/userModel");

module.exports.getSchool = (req, res) => {
  const idSchool = req.params.id;
  School.find({ _id: idSchool }).then((school) => {
    if (!school) {
      return res
        .status("401")
        .send({ error: "Nous n'avons pas d'information sur cette école." });
    }
    return res.send(school);
  });
};

module.exports.getListSchool = (req, res) => {
  const id = req.params.id;

  let arrayTheme = [];
  let arrayIdSchool = [];

  User.findOne({ _id: id }).then((user) => {
    if (user.dev == true) {
      arrayTheme.push("dev");
    }
    if (user.marketing == true) {
      arrayTheme.push("marketing");
    }
    School.find({ theme: arrayTheme[0] }).then((school) => {
      for (let i = 0; i < school.length; i++) {
        arrayIdSchool.push(school[i]._id);
      }
      return res.send(arrayIdSchool);
    });
  });
};

module.exports.createSchool = (req, res) => {
  const { name, theme, adress, tags } = req.body;

  if (!name || !theme || !adress || !tags) {
    return res.status("401").send("verifiez les parametres de la requete");
  }

  const school = new School({
    name: name,
    theme: theme,
    tags: [],
    information: {},
  });
  school
    .save()
    .then(() => {
      res.status(201).json({
        message: "School créé !",
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
