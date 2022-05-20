const supplierController = require("../controllers/supplier.controller");
const SupplierError = require("../middlewares/errors/Supplier.error.js");

const router = require("express").Router();

router.get("/all", supplierController.getAllSuppliers);
router.post("", supplierController.addSupplier);
router.put("", supplierController.updateSupplier);
router.delete("", supplierController.deleteSupplier);

router.use(SupplierError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/
