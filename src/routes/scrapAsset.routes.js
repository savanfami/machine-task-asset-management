import express from 'express';
import { scrapAsset, showScrapPage } from '../controller/scrapAsset.controller.js';


const router = express.Router();

router.get("/scrap/:id", showScrapPage);
router.post("/scrap/:id", scrapAsset);

export default router;