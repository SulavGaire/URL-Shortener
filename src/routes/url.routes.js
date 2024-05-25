import { Router } from "express";
import {shortUrl} from "../controllers/url.controller.js";

const router = Router()

router.route("/shortUrl").get(shortUrl);
export default router;