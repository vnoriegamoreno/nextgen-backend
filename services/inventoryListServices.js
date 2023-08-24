const db = require('../models');

exports.getInventoryList = () => {
  return db.InventoryList.findAll()
    .then((inventoryList) => ({
      success: true,
      data: inventoryList
    }))
    .catch((err) => {
      throw new Error(err);
    });
};

exports.filterInventoryListBySerialId = (serialId) => {
  return db.InventoryList.findAll({ where: { serialId } })
    .then((inventory) => ({
      success: true,
      data: inventory
    }))
    .catch((err) => {
      throw new Error(err);
    });
};

exports.addCarToInventoryList = (carProps, serialId) => {
  return db.InventoryList.create({
    "serialId": serialId || null,
    "make": carProps?.make || null,
    "model": carProps?.model || null,
    "package": carProps?.package || null,
    "color": carProps?.color || null,
    "year": `${carProps?.year || new Date().getFullYear()}`,
    "category": carProps?.category || null,
    "mileage": `${carProps?.mileage || 0}`,
    "price": `${carProps?.price || 0}`,
  }).then((inventoryList) => ({
    success: true,
    data: inventoryList
  }))
    .catch((err) => {
      throw new Error(err);
    })
};