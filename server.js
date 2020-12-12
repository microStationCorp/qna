const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//db setup
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("local mongoDB server connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());

//route middleware
app.use("/api/question", require("./routes/questionRoute"));
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/answer", require("./routes/answerRoute"));

app.listen(process.env.PORT, () =>
  console.log(`server start at port ${process.env.PORT}`)
);
