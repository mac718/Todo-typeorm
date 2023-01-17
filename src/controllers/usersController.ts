import { signUp, loginUser } from "../services/usersService";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await signUp(name, email, password);

  res.cookie("token", user.token, { httpOnly: true }).sendStatus(201);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginUser(email, password);
  res.cookie("token", user.token, { httpOnly: true }).sendStatus(201);
};
