const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


const connection = mongoose.connect(process.env.mongoURL);
module.exports=connection;
