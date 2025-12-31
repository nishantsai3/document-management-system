const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const documentRoutes = require("./routes/document.routes");

const app = express();

/* =======================
   ✅ CORS MUST COME FIRST
   ======================= */
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


/* =======================
   Middlewares
   ======================= */
app.use(express.json());

/* =======================
   Routes
   ======================= */
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);

/* =======================
   Static uploads
   ======================= */
app.use("/uploads", express.static("uploads"));

module.exports = app;
