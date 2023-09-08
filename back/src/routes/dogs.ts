import express from "express";
const dogsCtrl = require('../controllers/dogs');
const router = express.Router();

router.get('/breeds', dogsCtrl.get_dog_breeds);

export default router;