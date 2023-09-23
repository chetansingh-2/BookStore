import express from "express";
import { PORT, mongi } from "./config.js";

import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
import mongoose from "mongoose";

app.use(express.json()); //middleware

//middleware handling for cors policy

// //option1: allow  access from all origins
app.use(cors());

// //option2: allow custom origins
// app.use(cors(
//     {
//         origin: 'localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     }
// ))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to  chetan bhai");
});

app.use("/books", booksRoute); //middleware

mongoose
  .connect(mongi)

  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
      //for each url we need to have an http route for no mention / is url
    });
  })
  .catch((error) => {
    console.log(error);
  });
