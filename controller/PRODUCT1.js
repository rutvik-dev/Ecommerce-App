const Product = require('../model/PRODUCT');


// Add a new product
let CreateProduct = async function (req, res, next) {
    try {
        const { name, price, description, categoryId } = req.body;
        const CreateProduct = await Product.create({ name, price, description, categoryId });

        res.status(201).json({
            status: "success",
            message: 'Add A New Product Successfully',
            Data: CreateProduct
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get All Products
let GetAllProduct = async function (req, res, next) {
    try {
        const products = await Product.find().populate('categoryId')

        res.status(201).json({
            status: "success",
            message: 'Get All Product Successfully',
            Data: products
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

module.exports = {CreateProduct,GetAllProduct}
