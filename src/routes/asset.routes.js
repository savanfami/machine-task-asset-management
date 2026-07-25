import express from "express";
import {
  createAsset,
  deleteAsset,
  getAddAsset,
  getAssetHistory,
  getAssets,
  getEditAsset,
  getStockView,
  updateAsset,
} from "../controller/asset.controller.js";
const router = express.Router();

router.get("/", getAssets);

router.get("/add", getAddAsset);
router.post("/add", createAsset);

router.get("/edit/:id", getEditAsset);
router.post("/edit/:id", updateAsset);

router.post("/delete/:id", deleteAsset);

router.get("/stock-view", getStockView);

router.get("/history/:id", getAssetHistory);
export default router;
