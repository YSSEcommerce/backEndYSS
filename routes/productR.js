const express = require('express');
const productC = require('../controllers/productC');

const router = express.Router();

router.get('/', productC.getAllProducts);
router.get('/:id', productC.getProductById);
router.post('/', productC.createProduct);
router.put('/:id', productC.updateProduct);
router.delete('/:id', productC.deleteProduct);

module.exports = router;
