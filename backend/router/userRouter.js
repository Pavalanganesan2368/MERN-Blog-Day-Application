const express = require("express");
const { loginController, registerController } = require("../controller/userController");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/verify", verifyToken);

module.exports = router;