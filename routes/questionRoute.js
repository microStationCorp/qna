const router = require("express").Router();
const {
  getAllQuestion,
  getIndividualQuestion,
  addNewQuestion,
} = require("../controller/questionController");
const QuestionModel = require("../models/questionModel");
const userModel = require("../models/userModel");

//get all question
router.get("/all", getAllQuestion);

//get individual question
router.get("/:qid", getIndividualQuestion);

//add new question
router.post("/addnew", addNewQuestion);

module.exports = router;
