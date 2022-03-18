const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// MongoDb
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");

// Express
const app = express();

// Cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body-parser
app.use(bodyParser.json());
// Routes
app.use("/api/user", userRoutes);

// Server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
