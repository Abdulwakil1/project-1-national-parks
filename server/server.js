import express from "express";
import "./config/dotenv.js"; // loads environment variables

// Import parks router
import parksRouter from "./routes/parks.js";

// Create Express app
const app = express();

// Middleware to serve static files
// Anything in client/public can be accessed via http://localhost:3001/public
app.use("/public", express.static("./client/public"));

// Serve client/public at root
// app.use(express.static("./client/public"));

// Anything in client/src/scripts can be accessed via http://localhost:3000/scripts
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
// 404 handler: if no other route matched, serve the custom 404.html
// frontend parks.js already handles this so the follwing line is not stricly needed
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(clientPublic, "404.html"));
// });

// Port setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
