const express = require('express');
const userC = require('../controllers/userC');

const router = express.Router();

router.get('/', userC.getAllUsers);
router.get('/:id', userC.getUserById);
router.post('/', userC.createUser);
router.put('/:id', userC.updateUser);
router.delete('/:id', userC.deleteUser);

module.exports = router;
