const supplierService = require("../services/supplier.service");
const supplierValidator = require("../utils/validators/supplier.validate.js");
const response = require("../utils/response.utils");

const {
  ADD_supplier_SUCCESS,
  UPDATE_supplier_SUCCESS,
  DELETE_supplier_SUCCESS,
} = require("../configs/message.config");

exports.addSupplier = async (req, res, next) => {
  // validate the params
  const validation = supplierValidator.addValidator.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    return response.badRequest(res, {}, validation.error);
  }

  try {
    const newSupplier = await supplierService.addSupplier(validation.value);
    response.successRes(res, ADD_supplier_SUCCESS, newSupplier);
  } catch (err) {
    next(err);
  }
};

exports.updateSupplier = async (req, res, next) => {
  //validate the request
  const validation = supplierValidator.updateValidator.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }

  try {
    const updateSupplier = await supplierService.updateSupplier(
      validation.value._id,
      validation.value
    );
    if (updateSupplier) {
      response.successRes(res, UPDATE_supplier_SUCCESS, updateSupplier);
    } else {
      response.badRequest(res, "supplier not found", validation.value);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteSupplier = async (req, res, next) => {
  const validation = supplierValidator.deleteValidator.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }
  try {
    const supplierId = validation.value._id;
    await supplierService.removeSupplier(supplierId);
    response.successRes(res, DELETE_supplier_SUCCESS);
  } catch (err) {
    next(err);
  }
};

exports.getAllSuppliers = async (_, res, next) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    response.successRes(res, "", suppliers);
  } catch (err) {
    next(err);
  }
};
