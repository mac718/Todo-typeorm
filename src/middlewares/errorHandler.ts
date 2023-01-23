import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../errors/customError";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("middles", err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  } else {
    return res.status(500).json({ msg: "Somthing went wrong." });
  }
};
