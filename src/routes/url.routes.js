import { Router } from "express";
import { allUrls, shortID ,short} from "../controllers/url.controller.js";

const router = Router()

router.route("/").get(allUrls);

router.route("/short").post(short);
router.route("/:shortId").get(shortID);
export default router;