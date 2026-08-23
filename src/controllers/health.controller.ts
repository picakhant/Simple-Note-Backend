import { Request, Response } from "express";
import prisma from "../config/db";

export const healthCheck = async (req: Request, res: Response) => {
  const dbConnected = prisma ? true : false;

  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbConnected ? "connected" : "disconnected",
  });
};
