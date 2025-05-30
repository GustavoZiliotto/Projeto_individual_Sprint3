var express = require("express");
var router = express.Router();


var dashboardController = require("../controllers/dashboardController");
//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js


router.get("/buscarLeads/", function (req, res) {
    dashboardController.buscarLeads(req, res);
});

router.get("/buscarLeadsPizza/", function (req, res) {
    dashboardController.buscarLeadsPizza(req, res);
});

router.get("/buscarLeadsLista/", function (req, res) {
    dashboardController.buscarLeadsLista(req, res);
});




module.exports = router;