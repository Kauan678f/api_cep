const express = require("express")
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const CEPController = require("../controllers/CEPController");

const { increment, getCount, getCountSucess, getCountFailed } = require('../Request')

router.get('/cep/:cep', CEPController.findCidade);
router.get('/request', (request, response) => {
    response.json({requisicoes: getCount(), requisicoesSucess: getCountSucess(), requisicoesFailed: getCountFailed()})
})

module.exports = router;