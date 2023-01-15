import { signUp } from "../services/usersService";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const user = await signUp(name, email, password);
  res.cookie("token", user.token);
};
