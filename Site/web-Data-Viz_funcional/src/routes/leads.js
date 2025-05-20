var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/leadsController");

//Recebendo os dados do html e direcionando para a função cadastrar de leadsController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})


module.exports = router;