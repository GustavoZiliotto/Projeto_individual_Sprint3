// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

// require("dotenv").config({ path: caminho_env });

var database = require("../database/config");

console.log(`model`);

function buscarLeads() {
    var dataAtual =new Date()
    var usuario = 1;
    var anoAtual = dataAtual.getFullYear();

    var instrucaoSql = `
      select 
  (select 
  count(fklead)
  from usuario_leads
  where cotacao in ('S', 'A', 'O')  and
  fkusuario = ${usuario} and
  year(data) = ${anoAtual}) as cotacoes_enviadas,
  count(fklead) as lead_recebidos
  from usuario_leads
  inner join leads on leads.id = fklead
  where fkusuario = ${usuario} and
  year(data) = ${anoAtual};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarLeads
}