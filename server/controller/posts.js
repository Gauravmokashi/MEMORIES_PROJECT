import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log("getPosts -> error", error);
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log("createPost -> error", error);
    res.status(400).json({ message: error.message });
  }
};
