// packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Add CORS
import { createServer } from "http";
import { Server } from "socket.io";

// routes
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

// database
import { connectDB } from "./config/db.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Create an HTTP server and WebSocket server
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  },
});

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("🔗 New WebSocket connection");

  socket.on("trackOrder", (orderId) => {
    console.log(`Tracking order: ${orderId}`);

    // Simulate real-time order tracking updates
    setTimeout(() => socket.emit("orderUpdate", { orderId, status: "Shipped" }), 3000);
    setTimeout(() => socket.emit("orderUpdate", { orderId, status: "Out for Delivery" }), 6000);
    setTimeout(() => socket.emit("orderUpdate", { orderId, status: "Delivered" }), 9000);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected");
  });
});

// Middleware
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL || "*" })); // Enable CORS
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Connect to Database BEFORE starting the server
const startServer = async () => {
  try {
    await connectDB(); // Ensure DB connection before starting

    server.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1); // Exit process if DB fails
  }
};

startServer();
