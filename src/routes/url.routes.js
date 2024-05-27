import { Router } from "express";
import {short} from "../controllers/url.controller.js";

const router = Router()

router.route("/").get((req,res)=>{
    res.status(500).json({ message: '/ called' })
})
router.route("/short").post(short);
export default router;