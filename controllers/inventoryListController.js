const inventoryListServices = require('../services/inventoryListServices');

const INTERNAL_SERVER_ERROR = 'An internal error has been ocurred please contact us';

exports.getInventoryList = async (req, res) => {
  let result = {
    success: false,
    message: INTERNAL_SERVER_ERROR,
    data: []
  };
  try {
    result = await inventoryListServices.getInventoryList();
  } catch (err) {
    console.log({
      err,
      func: "getInventoryList",
      folder: "inventoryListController"
    });
    return res.status(500).send(result);
  }
  return res.status(200).send(result);
};

exports.filterInventoryListBySerialId = async (req, res) => {
  let result = {
    success: false,
    message: INTERNAL_SERVER_ERROR,
    data: []
  };
  try {
    const serialId = req?.params?.serialId;
    if (!serialId) {
      res.status(400).send({
        ...result,
        message: `Missing serialId parameter in your request`,
      });
    }
    result = await inventoryListServices.filterInventoryListBySerialId(serialId)
  } catch (err) {
    console.log({
      err,
      func: "filterInventoryListBySerialId",
      folder: "inventoryListController"
    });
    return res.status(500).send(result);
  }
  return res.status(200).send(result);
};

exports.addCarToInventoryList = async (req, res) => {
  let result = {
    success: false,
    message: INTERNAL_SERVER_ERROR,
  };
  try {
    const serialId = req?.params?.serialId;
    if (!Object.keys(req?.body).length || !serialId) {
      res.status(400).send({
        ...result,
        message: `Missing information`,
      });
    }
    result = await inventoryListServices.addCarToInventoryList(req.body, serialId);
  } catch(err) {
    console.log({
      err,
      func: "addCarToInventoryList",
      folder: "inventoryListController"
    });
    return res.status(500).send(result);
  }
  return res.status(201).send(result);
};