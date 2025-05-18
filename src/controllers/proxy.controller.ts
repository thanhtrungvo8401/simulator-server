import { NextFunction, Request, Response } from "express";
import dataService from "../services/data.service";

export const getProxyKeys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ data: dataService.getProxiesKey() });
  } catch (error) {
    next(error);
  }
};

export const getValueByKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const key = req.query["key"];

    const value = key ? dataService.getProxyValueByKey(key as string) : "EMPTY";

    res.status(200).json({ data: value });
  } catch (error) {
    next(error);
  }
};
