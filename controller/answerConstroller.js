const answerModel = require("../models/answerModel");
const questionModel = require("../models/questionModel");
const userModel = require("../models/userModel");

const addNewAnswer = (req, res) => {
  const { answer, answeredById, questionId } = req.body;

  const newAnswer = new answerModel({
    answer,
    answeredBy: answeredById,
    question: questionId,
  });

  newAnswer
    .save()
    .then((ans) => {
      //to save in user database
      userModel.findById(answeredById).then((user) => {
        user.answered.push(ans._id);
        user.save();
      });
      //to save in question database
      questionModel.findById(questionId).then((ques) => {
        ques.answers.push(ans._id);
        ques.save();
      });
      res.json(ans);
    })
    .catch((err) => res.json(err));
};

module.exports = { addNewAnswer };
