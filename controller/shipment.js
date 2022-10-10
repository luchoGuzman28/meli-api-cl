var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var meliServicesClass = require("../services/MercadolibreService");
var meliServices = new meliServicesClass();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/:id', async function(req, res, next) {
  const { id } = req.params;
  try
  {
      var level = await meliServices.getShipment(id);
      res.send(level);
  }  
  catch(error)
  {
     next(error);
  }
});

module.exports = router;
