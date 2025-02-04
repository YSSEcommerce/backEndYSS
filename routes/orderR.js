const express = require('express');
const orderC = require('../controllers/orderC');

const router = express.Router();

router.get('/', orderC.getAllOrders);

module.exports = router;
