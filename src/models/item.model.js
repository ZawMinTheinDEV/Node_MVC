const mongoose = require('mongoose');
const itemSchema = require('./schemas/item.schema');

module.exports = mongoose.model('Item', itemSchema);

/*
mongoose model
*/