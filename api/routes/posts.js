import express from "express";
import { getPost, getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
