const express = require('express');
const router = express.Router();
const inventoryListController = require('../controllers/inventoryListController');

router.get('/', inventoryListController.getInventoryList);
router.get('/:serialId', inventoryListController.filterInventoryListById);
router.post('/:serialId', inventoryListController.addCarToInventoryList);

module.exports = router;