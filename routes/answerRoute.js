const router = require("express").Router();
const { addNewAnswer } = require("../controller/answerConstroller");
//add asnwer to a question
router.post("/add_answer", addNewAnswer);

module.exports = router;
