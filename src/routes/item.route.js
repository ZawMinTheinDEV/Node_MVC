const itemController = require("../controllers/item.controller");
const itemError = require("../../errors/item.error");

const router = require("express").Router();

router.get("/all", itemController.getAllItems);
router.post("", itemController.addItem);
router.put("", itemController.updateItem);
router.delete("", itemController.deleteItem);

router.use(itemError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/
