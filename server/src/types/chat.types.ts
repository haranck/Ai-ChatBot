export interface ChatRequest {
    message: string;
}

export interface ChatResponse {
    success: boolean;
    reply: string;
}