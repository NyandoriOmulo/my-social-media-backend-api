import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getByID, getByUserID, updateBlog } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/add', addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getByID);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get("/nutu/:id", getByUserID);

export default blogRouter;

 