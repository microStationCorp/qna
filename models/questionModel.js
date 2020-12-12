const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: {
    type: String,
    required: true,
    unique: true,
  },
  askedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answer",
    },
  ],
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Question = mongoose.model("question", QuestionSchema);
