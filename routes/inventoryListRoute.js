const express = require('express');
const router = express.Router();
const inventoryListController = require('../controllers/inventoryListController');

const {
  getInventoryList,
  filterInventoryListById,
  addCarToInventoryList
} = inventoryListController;

router.get('/', getInventoryList);
router.get('/:id', filterInventoryListById);
router.post('/:id', addCarToInventoryList);

module.exports = router;