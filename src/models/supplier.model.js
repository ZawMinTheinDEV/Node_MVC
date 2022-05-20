const mongoose = require("mongoose");
const schema = require("./schemas/supplier.schema ");

module.exports = mongoose.model("Supplier", schema);
