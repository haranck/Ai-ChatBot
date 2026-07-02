import { Request, Response } from "express";

export interface IAIController {
  chat(req: Request, res: Response): Promise<void>;
}
