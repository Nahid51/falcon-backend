const { Schema, model } = require("mongoose");

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true,
        minLength: [3, "Name must be at least 3 character."],
        maxLength: [70, "Name is too large."]
    },
    slug: {
        type: String,
        required: [true, "Please provide valid slug."],
    },
    regular_price: {
        type: String,
        required: [true, "Please provide regular price."],
    },
    discount_price: {
        type: String,
        required: [true, "Please provide discount price."],
    },
    thumbnail: {
        type: String,
        required: [true, "Please provide product image."],
    },
    is_variant: Boolean,
    rating_avg: Number,
    rating_count: Number,
    available_stock: Number,
    badges: Array
});

const productModel = model("Product", productSchema);

module.exports = productModel;