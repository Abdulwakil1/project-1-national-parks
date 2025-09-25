import express from "express";

// Import parks router
import parksRouter from "./routes/parks.js";

// Create Express app
const app = express();

// Middleware to serve static files
// Anything in client/public can be accessed via http://localhost:3001/public
app.use("/public", express.static("./client/public"));

// Anything in client/src/scripts can be accessed via http://localhost:3001/scripts
app.use("/scripts", express.static("./client/src/scripts"));

// Routes
app.use("/parks", parksRouter);

// Root route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Project-1 National Parks API</h1>'
    );
});

// Port setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
