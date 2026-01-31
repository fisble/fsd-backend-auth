import express from "express";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Basic test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();
