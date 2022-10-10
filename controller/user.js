var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var meliServicesClass = require("../services/MercadolibreService");
var meliServices = new meliServicesClass();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/:id', async function(req, res, next) {
  const { id } = req.params;
  try{
      var userInfo = await meliServices.getUser(id);
      res.send(userInfo);
  }
  catch(error)
  {
     next(error);
  }
});

router.get('/:id/restrictions', async function(err,req, res, next) {
  const { id } = req.params;
  try{
      var userRestrictions = await meliServices.getUserRestrictions(id);
      res.send(userRestrictions);
  }
  catch(error)
  {
     next(error);
  }
});

router.get('/:id/purchases', async function(req, res, next) {
  const { id } = req.params;
  try{
      var userPurchases = await meliServices.getUserPurchases(id);
      res.send(userPurchases);
  }
  catch(error)
  {
     next(error);
  }
});



module.exports = router;
