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
      var level = await meliServices.getPayment(id);
      res.send(level);
  }
  catch(error)
  {
    return res.status(500).json({
      data: {"paymentId": id},
      error: error,
    });
  }
});

module.exports = router;
