import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import connectDB from "./config/db.js";
import loginRoute from "./routes/login.js";
import analysisRoute from "./routes/analytics.js";
import budgetRoute from "./routes/budget.js";
import savingRoute from "./routes/savings.js";
import transactionRoute from "./routes/transaction.js";
import userRoute from "./routes/user.js";

dotenv.config();

const app = express();

connectDB();

// Update CORS configuration
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/api/login", loginRoute);
app.use("/api/analysis", analysisRoute);
app.use("/api/budget", budgetRoute);
app.use("/api/savings", savingRoute);
app.use("/api/transaction", transactionRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});