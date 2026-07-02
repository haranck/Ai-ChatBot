import express from "express";
import aiRoute from './routes/ai.routes'

const app = express();

app.use(express.json());

app.use("/api", aiRoute);

export default app;