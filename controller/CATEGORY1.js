const Category = require('../model/CATEGORY');

// Add a new category
let CreateCategroy = async function (req, res, next) {
    try {
        const { name, description , userId} = req.body;
        const CreateCategroy = await Category.create({ name, description, userId});

        res.status(201).json({
            status: "success",
            message: 'Create Category successfully',
            Data: CreateCategroy
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get all categories
let GetAllCategroy = async function (req, res, next) {
    try {
        const categories = await Category.find().populate('userId');
        res.status(201).json({
            status: "success",
            message: 'Read Category successfully',
            Data: categories
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

module.exports = {CreateCategroy,GetAllCategroy}