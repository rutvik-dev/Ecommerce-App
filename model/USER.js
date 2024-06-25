const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
});



const User = mongoose.model('User', UserSchema);

module.exports = User;
