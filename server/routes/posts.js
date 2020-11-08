import express from "express";
import { getPosts } from "../controller/posts.js";

const router = express.Router();

router.get("/", (req, res) => {
  getPosts;
});

export default router;
