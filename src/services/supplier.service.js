const Supplier = require("../models/supplier.model");

exports.addSupplier = async (supplier) => {
  newSupplier = new Supplier(supplier);
  return await newSupplier.save();
};

exports.removeSupplier = async (id) => {
  await Supplier.findByIdAndRemove(id);
};

exports.updateSupplier = async (id, supplier) => {
  return await Supplier.findByIdAndUpdate(id, supplier);
};

exports.getAllSuppliers = async () => {
  return await Supplier.find();
};

/*
service will use models to work with database.
this is the only place where db query run.
*/
