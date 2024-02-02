import express from "express";
import { pasientLoging } from "../controller/auth";

const router = express.Router();
router.post('/login',pasientLoging);



export default router;
