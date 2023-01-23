import { signUp, loginUser } from "../services/usersService";
import { NextFunction, Request, Response } from "express";
import { asyncWrapper } from "../middlewares/asyncWrapper";
import { CustomAPIError } from "../errors/customError";
import { User } from "../entity/User.entity";
import { NotFoundError } from "../errors/NotFoundError";

export const register = asyncWrapper(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await signUp(name, email, password);

  res.cookie("token", user.token, { httpOnly: true }).sendStatus(201);
});

export const login = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user: User | string = await loginUser(email, password);

    if (typeof user == "string") {
      console.log("thinger", user);
      throw new NotFoundError(user);
    }

    res.cookie("token", user.token, { httpOnly: true }).sendStatus(200);
  }
);
