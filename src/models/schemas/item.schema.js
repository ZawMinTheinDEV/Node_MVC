const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

/*
item {
    sku, name, qty, price, 
}
*/

const itemSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Int32,
    default: 0,
  },
  price: {
    type: Int32,
    default: 0,
  },
});

module.exports = itemSchema;

/*
It is okay not to separate schema with model
but sometimes there are functions such as pre, or custom defined function in model,
so I think this is better.
comment as a simple object on the top of file for quick check.
*/
