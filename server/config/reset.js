import "../config/dotenv.js"; // load env first!
import { pool } from "./database.js";
import parksData from "../data/parks.js";

// Async function to create the parks table
const createParksTable = async () => {
  try {
    const createTableQuery = `
      DROP TABLE IF EXISTS parks;

      CREATE TABLE IF NOT EXISTS parks (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NOT NULL
      );
    `;

    await pool.query(createTableQuery);
    console.log("✅ Parks table created successfully.");
  } catch (err) {
    console.error("❌ Error creating parks table:", err);
    throw err; // propagate so seeding doesn't continue if table creation fails
  }
};

// Async function to seed parks data
const seedParksTable = async () => {
  try {
    await createParksTable();

    for (const park of parksData) {
      const insertQuery = `
        INSERT INTO parks (id, name, state, description, image)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (id) DO NOTHING;
      `;
      const values = [
        park.id,
        park.name,
        park.state,
        park.description,
        park.image,
      ];

      try {
        await pool.query(insertQuery, values);
        console.log(`✅ ${park.name} added successfully.`);
      } catch (err) {
        console.error(`⚠️ Error inserting park ${park.name}:`, err);
      }
    }

    console.log("🎉 All parks seeded successfully!");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    pool.end();
  }
};

// Run the seeding function
seedParksTable();
