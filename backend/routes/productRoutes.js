import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Get product by ID
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400);
      throw new Error("Invalid ID.");
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      res
        .status(404)
        .json({ message: "The product with the given ID was not found." });
    } else {
      res.json(product);
    }
  })
);

export default router;
