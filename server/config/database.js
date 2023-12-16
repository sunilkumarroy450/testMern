const mongoose = require("mongoose");

const connection_uri =
  "mongodb+srv://testMern:testMern@cluster0.uukdttn.mongodb.net/testMern";

const connection = () => {
  mongoose.connect(connection_uri, {});

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = { connection };
