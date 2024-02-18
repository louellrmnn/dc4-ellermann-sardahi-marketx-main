const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

router.get('/', campaignCtrl.getAllCampaigns);
router.get('/:id', campaignCtrl.getOneCampaign); // A tester si il y a un S ici ou non 
router.post('/order', campaignCtrl.orderCampaigns);

module.exports = router;