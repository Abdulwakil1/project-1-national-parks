// server/routes/parks.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ParksController from "../controllers/parks.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get all parks (from DB)
router.get("/", ParksController.getParks);

// Return JSON data for one park; route: e.g., http://localhost:3000/parks/1/data
router.get("/:parkId/data", ParksController.getParkById);

// Serve park detail HTML page
router.get("/:parkId", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/park.html"));
});

export default router;
