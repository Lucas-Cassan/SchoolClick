const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@schoolclick.juzus.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    },
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connexion", err));
