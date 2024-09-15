import express from "express";
import {
  deleteSingleProduct,
  getAllProduct,
  getSingleProduct,
  postProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", postProduct);
router.put("/:id", getSingleProduct);
router.delete("/:id", deleteSingleProduct);

export default router;
