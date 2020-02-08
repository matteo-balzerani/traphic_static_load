import express from "express";
import mongoose from "mongoose";

import * as entrypoint from "./controller/entrypoint";

//local
//const uri: string = "mongodb://127.0.0.1:27017/mongodb";

//docker
const uri: string = "mongodb://mongo:27017/mongodb";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/load-data", entrypoint.loadData);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});
