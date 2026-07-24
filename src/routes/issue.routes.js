import express from 'express';
import { getIssuePage, issueAsset } from '../controller/issue.controller.js';
import { getIssuedAssets } from '../controller/asset.controller.js';
const router = express.Router();

// router.get("/", getIssuedAssets);
router.get("/issue", getIssuePage);
router.post("/issue", issueAsset);

export default router;

