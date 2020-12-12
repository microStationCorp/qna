const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUser = (req, res) => {
  UserModel.find()
    .populate("questions", "questionName uploadDate")
    .populate({
      path: "answered",
      select: "likes dislikes answer question answeredDate",
      populate: {
        path: "question",
        select: "questionName askedBy",
        populate: {
          path: "askedBy",
          select: "name",
        },
      },
    })
    .then((users) => {
      res.json({
        msg: "all users",
        count: users.length,
        users: users.map((u) => {
          return {
            _id: u._id,
            username: u.name,
            email: u.email,
            register_date: u.register_date,
            questions: {
              total_question_asked: u.questions.length,
              list: u.questions.map((uq) => {
                return {
                  question: uq.questionName,
                  uploadDate: uq.uploadDate,
                };
              }),
            },
            answered: {
              total_questioned_answered: u.answered.length,
              list: u.answered.map((ua) => {
                return {
                  question: ua.question.questionName,
                  asked_by: ua.question.askedBy.name,
                  answer: ua.answer,
                  likes: ua.likes,
                  dislikes: ua.dislikes,
                };
              }),
            },
          };
        }),
      });
    })
    .catch((err) => res.json(err));
};

const userRegister = (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.json(err);

    bcrypt.hash(password, salt, (err, hashed) => {
      if (err) return res.json(err);

      const user = new UserModel({ name: username, email, password: hashed });

      user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    });
  });
};

module.exports = { getAllUser, userRegister };
