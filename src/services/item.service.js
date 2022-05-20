const Item = require("../models/item.model");

exports.addItem = async (item) => {
  return await item.save();
};

exports.removeItem = async (id) => {
  return await Item.findByIdAndRemove(id);
};

exports.updateItem = async (id, item) => {
  return await Item.findByIdAndUpdate(id, item);
};

exports.getAllItems = async () => {
  return await Item.find();
};

/*
service will use models to work with database.
this is the only place where db query run.
*/
