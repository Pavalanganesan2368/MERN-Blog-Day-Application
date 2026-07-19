const Post = require("../model/post");

const overAllUserPostController = async (req, res) => {
  try {
    const allPosts = await Post.find().exec();
    if (!allPosts) return res.status(404).json({ message: "All Posts not found" });
    res.status(200).json(allPosts);
  } catch (error) {
    console.log('Error in overAllUserPostController : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const allPostController = async (req, res) => {
  try {
    const posts = await Post.find({
      user: req.user.id
    }).lean();
    if (!posts) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(posts);
  } catch (error) {
    console.log('Error in allPostController : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const postController = async (req, res) => {
  try {
    const { postName, postDescription, postDate } = req.body;
    if (!postName || !postDescription) return res.status(400).json({ message: "Please fill all the required." });
    
    const createPost = {
      postName,
      postDescription,
      postDate,
      user: req.user.id
    }
    
    const posts = await Post.create(createPost);
    
    if (!posts) return res.status(400).json({ message: "Post is not created!" });

    res.status(200).json(posts);
  } catch (error) {
    console.log('Error in postController : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const updatePostController = async (req, res) => {
  try {
    const id = req.params.id;
    const { postName, postDescription } = req.body;

    const updatePost = await Post.findById(id);
    if (!updatePost) return res.status(404).json({ message: "Post not found" });

    if (updatePost.user.toString() !== req.user.id) return res.status(403).json({ message: "You are not allowed to edit this post" });

    if (postName) updatePost.postName = postName;
    if (postDescription) updatePost.postDescription = postDescription;

    await updatePost.save();
    res.status(200).json({ message: "Post is Updated" });

  } catch (error) {
    console.log('Error in updatePostController : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

const deletePostController = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found!" });

    if (post.user.toString() !== req.user.id) return res.status(403).json({ message: 'You are not allowed to delete this post' });

    await post.deleteOne();

    res.status(200).json({ message: "Post is Deleted" });
  } catch (error) {
    console.log('Error in deletePostController : '+error.message);
    res.status(500).json({ message: "Internet Server Error" });
  }
}

module.exports = {
  allPostController,
  postController,
  updatePostController,
  deletePostController,
  overAllUserPostController
}