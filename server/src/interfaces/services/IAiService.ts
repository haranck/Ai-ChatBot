export interface IAIService {
    askAI(message: string): Promise<string>;
}