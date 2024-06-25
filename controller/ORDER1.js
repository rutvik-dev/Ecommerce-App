const Order = require('../model/ORDER');

// Create a new order
let CreateOrder = async function (req, res, next) {
    try {
        const { user, products, totalAmount } = req.body;
        const CreateOrder = await Order.create({ user, products, totalAmount });

        res.status(201).json({
            status: "success",
            message: 'Create A New Order Successfully',
            Data: CreateOrder
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// // Get all orders
let GerAllOrder = async function (req, res, next) {
    try {
        const orders = await Order.find().populate('user').populate('products.product');

        res.status(201).json({
            status: "success",
            message: 'Get All Order Successfully',
            Data: orders
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}



module.exports = {CreateOrder,GerAllOrder}



// exports.createOrder = async (req, res) => {
//   const { user, products, totalAmount } = req.body;

//   try {
//     const newOrder = new Order({
//       user,
//       products,
//       totalAmount,
//     });

//     await newOrder.save();
//     res.json(newOrder);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// // Get all orders
// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate('user').populate('products.product');
//     res.json(orders);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };
