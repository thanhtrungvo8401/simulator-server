import { NextFunction, Request, Response } from "express";

export const getHealthCheckStatus = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ status: "ok" });
};
