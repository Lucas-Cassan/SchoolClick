const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// MongoDb
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const swipeRoutes = require("./routes/swipeRoutes");

// Express
const app = express();

// Cors
const corsOptions = {
  origin: true,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body-parser
app.use(bodyParser.json({ limit: 100000000000 }));
// Routes
app.use("/api/user", userRoutes);
app.use("/api/swipe", swipeRoutes);

// Server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
