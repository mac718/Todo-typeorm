import { register } from "../controllers/usersController";
import express from "express";
const router = express.Router();

export const users = router;

users.route("/").post(register);
