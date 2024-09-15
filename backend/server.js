import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/product.route.js";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __direname = path.resolve();
app.use(express.json());
app.use("/api/products", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__direname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__direname, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
