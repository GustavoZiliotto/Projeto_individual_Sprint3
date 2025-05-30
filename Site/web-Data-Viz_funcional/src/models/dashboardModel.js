// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

// require("dotenv").config({ path: caminho_env });

var database = require("../database/config");

console.log(`model`);

function buscarLeads(usuario) {
    var dataAtual =new Date()
    var anoAtual = dataAtual.getFullYear();

var instrucaoSql = `
  select 
    month(data) as mes,
    count(case 
    when cotacao in ('S', 'A', 'O') then 1
     end) as cotacoes_enviadas,
    count(id) as lead_recebidos
  from leads
  where fkusuario = ${usuario} 
    and year(data) = ${anoAtual}
  group by month(data)
  order by mes;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLeadsPizza(usuario) {
  var dataAtual =new Date()
  var mesAtual = dataAtual.getMonth() + 1

  var instrucaoSql = 
  `
 select
count(case
when cotacao in ('S', 'A', 'O') and 
apolice is null then 1
end
) as cotacoes_enviadas,
count(case
when apolice = 'S'
then 1
end) as apolices_saude,
count(case
when apolice = 'A'
then 1
end) as apolices_auto,
count(case
when apolice = 'O'
then 1
end) as apolices_outros
from leads
where fkusuario = ${usuario}
;

  `
      console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLeadsLista(usuario){
  var instrucaoSql = `
  select
  id,
  DATE_FORMAT(data, '%d/%m/%Y') as data,
  nome, 
  celular, 
  email, 
  mensagem, 
  idade,
  cotacao,
  apolice
  from leads
  where fkusuario = ${usuario}
  order by data desc
  `
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    buscarLeads,
    buscarLeadsPizza,
    buscarLeadsLista
}