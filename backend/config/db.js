const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/BLOG_APPLICATION");
    console.log('MONGODB is Connected : '+conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;