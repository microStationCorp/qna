const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
    },
  ],
  answered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answer",
    },
  ],
});

module.exports = User = mongoose.model("user", userSchema);
