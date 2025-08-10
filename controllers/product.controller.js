const productModel = require("../models/product.model.js");

exports.createProduct = async (req, res, next) => {
    try {
        const createProduct = await productModel.create(req.body);
        res.status(200).json({
            message: "New product information saved successfully!",
            result: createProduct
        });
    } catch (error) {
        next(error)
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        const getProducts = await productModel.find({});
        res.status(200).json({
            message: "All products founded!",
            result: getProducts
        })
    } catch (error) {
        next(error)
    }
}

exports.getProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const getProduct = await productModel.findById({ _id: id });
        res.status(200).json({
            message: "Single product founded!",
            result: getProduct
        })
    } catch (error) {
        next(error)
    }
}

exports.updateProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updateProduct = await productModel.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true })
        res.status(200).json({
            message: "Product information updated successfully!",
            result: updateProduct
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deleteProduct = await productModel.findByIdAndDelete({ _id: id });
        res.status(200).json({
            message: "Single product founded and delete it!",
            result: deleteProduct
        })
    } catch (error) {
        next(error)
    }
}
