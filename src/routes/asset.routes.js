import express from "express";
import { createAsset, deleteAsset, getAddAsset, getAssets, getEditAsset, updateAsset } from "../controller/asset.controller.js";
const router = express.Router();


router.get("/", getAssets);

router.get("/add", getAddAsset);
router.post("/add", createAsset);

router.get("/edit/:id", getEditAsset);
router.post("/edit/:id", updateAsset);

router.post("/delete/:id", deleteAsset);

export default router; 