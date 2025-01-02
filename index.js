const app = require("./server"); // Ensure this properly imports 'app' from server.js
const authRoutes = require("./routes/authRoutes");

// Middleware and routes
app.use("/api/auth", authRoutes);

// Define the port and start the server
const port = process.env.PORT || "3000";
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
