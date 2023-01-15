import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies("token");
}
