import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface IGetUserAuthInfoRequest extends Request {
  user?: { user_id: number; email: string };
}

export function checkToken(
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  console.log("token", JSON.stringify(req.cookies));

  if (!token) {
    throw new Error("Unauthorized. Please log in.");
  }

  jwt.verify(token, "supersecretjwtsecret", (err: any, decoded: any) => {
    if (err) {
      throw new Error(err.message);
    }

    const verifiedUser = decoded;

    if (!verifiedUser) {
      throw new Error("Unauthorized. Please log in.");
    }

    req.user = verifiedUser;

    next();
  });
}
