import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

/* 🔥 ADD THIS */
app.use(cors({
  origin: "*"
}));

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
