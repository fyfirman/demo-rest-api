const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json())

const dbUri = 'mongodb://localhost:27017/mahasiswa';
mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
  console.log("Mongo berhasil terkoneksi");
});

app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});