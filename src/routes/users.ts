import { login, register } from "../controllers/usersController";
import express from "express";
import { body } from "express-validator";

const router = express.Router();

export const users = router;

users
  .route("/")
  .post(
    body("name").notEmpty().trim().escape(),
    body("email").trim().escape().isEmail(),
    body("password").isLength({ min: 5 }),
    register
  );
users
  .route("/login")
  .post(
    body("email").trim().escape().isEmail(),
    body("password").isLength({ min: 5 }),
    login
  );
