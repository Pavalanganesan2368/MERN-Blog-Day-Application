const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');

const registerController = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    if (!userName || !userEmail || !userPassword) return res.status(400).json({ message : "All field are required" });

    const existUser = await User.findOne({ $or: [{ userName }, { userEmail }] });
    if (existUser) return res.status(409).json({ message: "Username and Password are already Exists." });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userPassword, salt);

    const newUser = {
      userName,
      userEmail,
      userPassword: hashPassword
    }

    await User.create(newUser);
    res.status(201).json({ message: "User is Created Successfully"});
  } catch (error) {
    console.log(`Error in register Controller : ${error.message}`);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const loginController = async (req, res) => {
  try {
    const { userName, userPassword } = req.body;

    if (!userName || !userPassword) return res.status(400).json({ message: "Username and password are required." });

    const user = await User.findOne({ userName })
      .select("+userPassword").exec();
    if (!user) return res.status(404).json({ message: "Invalid username and password" });

    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) return res.status(401).json({ message: "Invalid username and password" });

    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName
      },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    );

    res.json({ token, user: { id: user._id, userName: user.userName, userEmail: user.userEmail }});
  } catch (error) {
    console.log(`Error in login Controller : ${error.message}`);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const getTokenVerify = async (req, res) => {
  try {
    res.status(200).json({ valid: true, user: req.user });
  } catch (error) {
    console.log('Error in getTokenVerify Controller : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

module.exports = {
  registerController,
  loginController,
  getTokenVerify
}