const School = require("../models/schoolModel");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const imageToBase64 = require("image-to-base64");

/* var jwt_decode = require("jwt-decode");
var mongo = require("mongodb");
 */

module.exports.getSchool = (req, res) => {
  let idSchool = req.headers.idschool;
  console.log(idSchool);
  School.find({ _id: idSchool }).then((school) => {
    if (!school) {
      return res
        .status("401")
        .send({ error: "Nous n'avons pas d'information sur cette école." });
    }
    return res.send(school);
  });
};

module.exports.getListSchool = async (req, res) => {
  console.log("zebi : " + req.params.id);

  const userId = req.params.id;

  let arrayTheme = [];
  let arrayIdSchool = [];

  User.findById(userId)
    .then((user) => {
      console.log(user);
      if (user.dev == true) {
        arrayTheme.push("dev");
      }
      if (user.marketing == true) {
        arrayTheme.push("marketing");
      }
      School.find({ theme: arrayTheme[0] }).then((school) => {
        for (let i = 0; i < school.length; i++) {
          arrayIdSchool.push(school[i]);
        }
        for (let y = 0; y < arrayIdSchool.length; y++) {
          for (let z = 0; z < user.likeArray.length; z++) {
            if (user.likeArray[z] == arrayIdSchool[y]) {
              arrayIdSchool.remove(y);
            }
          }
        }

        return res.send(arrayIdSchool);
      });
    })
    .catch((err) => {
      return res.send(err);
    });
};

module.exports.likeOrNope = (req, res) => {
  const { userId, schoolId, name, lastName, email } = req.body;

  if (name) {
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525, //25,
      // secure: false,
      //service: 'gmail',
      auth: {
        user: "0b0e1c0f2b8bed",
        pass: "112fea471262a2",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: `${email}`,
      to: "lucascassan.pro@gmail.com",
      subject: "Nouvelle candidature",
      text: `
        prénom : ${name};
        nom : ${lastName};
      `,
      attachments: [
        {
          filename: "cv.jpg",
          path: `./image/cv/${lastName}-${name}.jpg`,
          cid: "img",
        },
      ],
    };

    var mailOptions2 = {
      from: "contact@spill.com",
      to: `${email}`,
      subject: "Nouvelle école liké !",
      text: "Félicitation vous avez été mis en relation avec une nouvelle école",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }

  // // const array = [];
  // User.findOne({ _id: userId }).then((user) => {
  //   console.log(user);
  //   console.log(user.likeArray);
  //   if (user.likeArray) {
  //     // let newLike = {
  //     //     id: schoolId
  //     // }
  //     // array = user.likeArray;
  //     // array.push(newLike);
  //     School.findByIdAndUpdate(
  //       user.id,
  //       { $addToSet: { likeArray: schoolId } },
  //       { new: true, upsert: true }
  //     )
  //       .then((response) => {
  //         console.log("1");
  //         return res.send(response);
  //       })
  //       .catch((err) => {
  //         console.log("2");
  //         res.status(500).send(err);
  //       });
  //   } else {
  //     School.updateOne(user.id, { $set: { likeArray: schoolId } });
  //   }
  // });
};

module.exports.createSchool = (req, res) => {
  const { name, theme, tags, information } = req.body;

  if (!name || !theme || !information || !tags) {
    return res.status("401").send("verifiez les parametres de la requete");
  }

  const school = new School({
    name: name,
    theme: theme,
    tags: tags,
    information: information,
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
