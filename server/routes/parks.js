// server/routes/parks.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import parkData from "../data/parks.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// GET all parks
router.get("/", (req, res) => {
  res.status(200).json(parkData);
});

// GET single park by id → serve detail page
router.get("/:parkId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/park.html"));
});

export default router;
