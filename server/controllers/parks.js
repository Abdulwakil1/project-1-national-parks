// server/controllers/parks.js
import { pool } from "../config/database.js";

// Get all parks
const getParks = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM parks ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Get single park by ID
const getParkById = async (req, res) => {
  const parkId = req.params.parkId;
  try {
    const results = await pool.query("SELECT * FROM parks WHERE id = $1", [
      parkId,
    ]);

    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Park not found" });
    }

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default { getParks, getParkById };
