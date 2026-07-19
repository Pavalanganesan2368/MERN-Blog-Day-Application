const postRouter = require('./router/postRouter');  
const userRouter = require('./router/userRouter');  
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3500;
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dns = require('dns');
const corsOptions = require('./config/corsOptions');
const app = express();
app.use(cors(corsOptions));

dns.setServers(["0.0.0.0", "8.8.8.8"]);

dotenv.config();


app.use(express.json());
app.use("/posts", postRouter);
app.use("/api/auth", userRouter);

mongoose.connection.on("open", () => {
  app.listen(PORT, () => {
    console.log('Server is now started at http://localhost:'+PORT);
  });
});

connectDB();