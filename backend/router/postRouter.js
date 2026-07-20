const express = require('express');
const { allPostController, postController, updatePostController, deletePostController, overAllUserPostController } = require('../controller/postController');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.get("/" ,verifyToken, allPostController);
router.post("/post", verifyToken, postController);
router.put("/:id", verifyToken, updatePostController);
router.delete("/post/:id", verifyToken, deletePostController);
router.get("/allPost", overAllUserPostController);

module.exports = router;