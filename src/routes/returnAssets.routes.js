import express from 'express';
import { getReturnedAssets, getReturnPage, returnAsset } from '../controller/returnAsset.controller.js';

const router = express.Router();

router.get("/", getReturnedAssets);
router.get("/add", getReturnPage);
router.post("/add", returnAsset);

export default router;