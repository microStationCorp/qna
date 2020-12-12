const router = require("express").Router();
const { getAllUser, userRegister } = require("../controller/userController");

//register new user
router.post("/register", userRegister);

//get all user
router.get("/all_user", getAllUser);

module.exports = router;
