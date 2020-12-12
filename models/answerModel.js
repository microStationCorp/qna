const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  answeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  answeredDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Answer = mongoose.model("answer", answerSchema);
