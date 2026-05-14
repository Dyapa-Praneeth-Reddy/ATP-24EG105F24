import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = exp();

// Serve static files from the React frontend app
app.use(exp.static(path.join(__dirname, "../frontend/dist")));

//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"], // Still allow local dev origin
  }),
);

//body parser middleware
app.use(exp.json());

//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/empdb";
    const port = process.env.PORT || 4000;
    
    await connect(dbUrl);
    console.log("DB connected");
    app.listen(port, () => console.log(`server listening on port ${port}..`));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
