import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import routes from "./routes";

const app = express();

// Define allowed origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5000"];

// Set up CORS middleware with allowed origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from /uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to food dashboard server!");
});

// Main API routes
app.use("/api", routes);

// Catch-all 404 handler
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not found",
  });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
