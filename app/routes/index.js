const express = require('express');
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');
const documentController = require('../controllers/documentController');

const router = express.Router();

router.get('/users', userController.getUserList);
router.get('/items', itemController.getItemList);
router.get('/documents', documentController.getDocumentList);


router.post('/users', userController.createUser);
router.post('/items', itemController.createItem);
router.post('/documents', documentController.createDocument);
module.exports = router;
