import { Router } from "express";
import { getHealthCheckStatus } from "../controllers/health-check.controller";

const router = Router();

router.get('/', getHealthCheckStatus);

export default router;