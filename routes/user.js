const router = require("express").Router();
const userController = require("../controllers/user");
const { verifySignUp } = require('../middleware/auth');

router.post("/register", verifySignUp, userController.register);
router.post("/login", userController.login);

module.exports = router;