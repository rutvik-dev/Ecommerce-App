const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
