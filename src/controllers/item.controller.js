const itemService = require("../services/item.service");

const response = require("../utils/response.utils");

const {
    ADD_ITEM_SUCCESS, UPDATE_ITEM_SUCCESS, DELETE_ITEM_SUCCESS,
} = require("../configs/message.config");

exports.addItem = async (req, res, next) => {
    try {
        const sku = req.body.itemSku;
        const name = req.body.itemName;
        const price = req.body.price;
        await itemService.addItem({ sku, name, price });
        response.successRes(res, ADD_ITEM_SUCCESS);
    } catch(err) {
        next(err);
    }
}

exports.updateItem = async (req, res, next) => {
    try {
        const itemId = req.body.itemId;
        const sku = req.body.itemSku;
        const name = req.body.itemName;
        const price = req.body.price;
        await itemService.updateItem(itemId, { sku, name, price });
        response.successRes(res, UPDATE_ITEM_SUCCESS);
    } catch(err) {
        next(err);
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
        const itemId = req.body.itemId;
        await itemService.removeItem(itemId);
        response.successRes(res, DELETE_ITEM_SUCCESS);
    } catch(err) {
        next(err);
    }
}

exports.getAllItems = async (_, res, next) => {
    try {
        const items = await itemService.getAllItems();
        response.successRes(res, data = items);
    } catch(err) {
        next(err);
    }
}

/*
Each route file will use controller file
Controller is responsible to accept request and response data
These files will access data from service
*/