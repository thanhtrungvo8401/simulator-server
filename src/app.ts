import express from "express";
import routes from "./routes/health-check.route";
import proxiesRoute from './routes/api-proxy.route';
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/", routes);

app.use('/proxies', proxiesRoute)

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
