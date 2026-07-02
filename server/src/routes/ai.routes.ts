import { Router } from "express";
import { AIController } from "../controllers/ai.controller";
import { AIService } from "../services/ai.service";
import { ChatRepository } from "../repositories/chat.repository";
import { gemini } from "../config/ai";

const router = Router();

const chatRepo = new ChatRepository();

const aiService = new AIService(gemini, chatRepo);

const aiController = new AIController(aiService);

router.post("/chat", aiController.chat.bind(aiController));

export default router;