const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
