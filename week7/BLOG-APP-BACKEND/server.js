import exp from 'express'
import { connect } from 'mongoose'
import { commonApp } from './APIs/commonAPI.js'
import { userApp } from './APIs/userAPI.js'
import { authorApp } from './APIs/authorAPI.js'
import { adminApp } from './APIs/adminAPI.js'
import { config } from 'dotenv'
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

config()
const app=exp()
//body parser middleware
app.use(exp.json());
app.use(cookieParser());
app.set('trust proxy', 1); // Trust first proxy for secure cookies
//path level middleware
app.use("/user-api", userApp)
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/common-api", commonApp)

// Connect to Database safely
const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      console.error("❌ ERROR: DB_URL environment variable is missing!");
      process.exit(1);
    }
    
    // SAFE LOGGING (Hidden Password)
    const sanitizedUrl = dbUrl.replace(/:.+@/, ":****@");
    console.log(`🔗 Attempting connection with: ${sanitizedUrl}`);
    
    // Attempt to connect with a shorter timeout so it fails visibly instead of hanging
    await connect(dbUrl, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ MongoDB Connected Successfully");
    
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 Server listening on port ${port}`));
  } catch (err) {
    console.error("❌ MongoDB Connection Error:");
    console.error(err.message);
    // Exit process with failure so Render can restart cleanly
    process.exit(1);
  }
};

connectDB();

// To handle path level static serving and invalid path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the frontend build dynamically
app.use(exp.static(path.join(__dirname, '../BLOG-APP-FRONTEND/dist')));

app.use((req, res, next) => {
  // If the request starts with api routes, return 404 as before
  if (req.url.startsWith('/user-api') || req.url.startsWith('/author-api') || req.url.startsWith('/admin-api') || req.url.startsWith('/common-api')) {
    res.status(404).json({ message: `Path ${req.url} is Invalid` })
  } else {
    // Other routes should be forwarded to the React Application
    res.sendFile(path.join(__dirname, '../BLOG-APP-FRONTEND/dist/index.html'))
  }
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err.stack);
  //validation Error
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error Occurred", error: err.message })
  }
  //Cast Error
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error Occurred", error: err.message })
  }
  //Duplicate Key Error (e.g. unique email)
  if (err.name === "MongoServerError" && err.code === 11000) {
    return res.status(400).json({ message: "error Occurred", error: "Duplicate value entered. This email/username may already be registered." })
  }
  //Custom Error
  //send Server side Error
  return res.status(500).json({ message: "error Occurred", error: "Server side error" })
});