const QuestionModel = require("../models/questionModel");
const UserModel = require("../models/userModel");

const getAllQuestion = (req, res) => {
  QuestionModel.find()
    .populate({
      path: "answers",
      select: "likes dislikes answer answeredBy",
      populate: { path: "answeredBy", select: "name" },
    })
    .populate("askedBy", "name")
    .then((ques) => {
      res.json({
        msg: "all questions",
        total_questions: ques.length,
        questions: ques.map((q) => {
          return {
            _id: q._id,
            question: q.questionName,
            asked_by: q.askedBy.name,
            upload_date: q.upload_date,
            answer_detail: {
              total_answer: q.answers.length,
              answers: q.answers.map((qa) => {
                return {
                  answer: qa.answer,
                  answered_by: qa.answeredBy.name,
                  likes: qa.likes,
                  dislikes: qa.dislikes,
                };
              }),
            },
          };
        }),
      });
    });
};

const getIndividualQuestion = (req, res) => {
  QuestionModel.findById(req.params.qid)
    .populate({
      path: "answers",
      select: "likes dislikes answer answeredBy",
      populate: { path: "answeredBy", select: "name" },
    })
    .populate("askedBy", "name")
    .then((q) => {
      res.json({
        _id: q._id,
        question: q.questionName,
        asked_by: q.askedBy.name,
        upload_date: q.upload_date,
        answer_detail: {
          total_answer: q.answers.length,
          answers: q.answers.map((qa) => {
            return {
              answer: qa.answer,
              answered_by: qa.answeredBy.name,
              likes: qa.likes,
              dislikes: qa.dislikes,
            };
          }),
        },
      });
    });
};

const addNewQuestion = (req, res) => {
  const { question, askedById } = req.body;
  const ques = new QuestionModel({
    questionName: question,
    askedBy: askedById,
  });
  ques
    .save()
    .then((data) => {
      //to save to the users database
      UserModel.findById(askedById).then((user) => {
        user.questions.push(data._id);
        user.save();
      });
      res.json(data);
    })
    .catch((err) => res.json(err));
};

module.exports = { getAllQuestion, getIndividualQuestion, addNewQuestion };
