import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  username: "default", // Required for Upstash
  password: process.env.UPSTASH_REDIS_TOKEN,
  tls: { rejectUnauthorized: false }, // Ensure TLS is properly set
});

redis.on("connect", () => console.log("✅ Connected to Upstash Redis"));
redis.on("error", (err) => console.error("❌ Redis Error:", err));
