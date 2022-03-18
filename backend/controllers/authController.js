const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

module.exports.signup = (req, res, next) => {
  const { pseudo, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new User({
        pseudo: pseudo,
        email: email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((err) => res.status(400).send({ error: err }));
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        console.log("pas d'user");
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            console.log("mot de passe incorrect");
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          } else {
            console.log("connecté");
            res.status(200).json({
              userId: user._id,
              token: jwt.sign({ userId: user._id }, "ueahzçidhaée&é&!&èéçà", {
                expiresIn: "24h",
              }),
            });
          }
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
};
