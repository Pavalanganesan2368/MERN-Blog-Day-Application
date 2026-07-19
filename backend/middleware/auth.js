const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ message: "No Token Provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
}

module.exports = verifyToken;