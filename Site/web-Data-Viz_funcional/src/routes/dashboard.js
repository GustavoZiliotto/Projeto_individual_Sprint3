var express = require("express");
var router = express.Router();


var dashboardController = require("../controllers/dashboardController");
//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js


router.get("/dashboard/buscarLeads/", function (req, res) {
    dashboardController.buscarLeads(req, res);
});


module.exports = router;