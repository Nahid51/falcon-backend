const express = require("express");
const router = express.Router();

const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require("../controllers/product.controller.js");

router.route("/:id")
    .get(getProduct)
    .delete(deleteProduct)
    .patch(updateProduct)

router.post("/create", createProduct);
router.get("/", getProducts);

module.exports = router;