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
  else 0
  end) as cotacoes_enviadas,
  count(fklead) as lead_recebidos
  from usuario_leads
  inner join leads on leads.id = fklead
  where fkusuario = ${usuario} and
  year(data) = ${anoAtual}
  group by data
  order by mes
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
from usuario_leads
inner join leads on leads.id = usuario_leads.fklead
where fkusuario = ${usuario} and
month(data) = ${mesAtual}
;

  `
      console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLeadsLista(usuario){
  var instrucaoSql = `
  select
  l.data,
  l.nome, 
  l.celular, 
  l.email, 
  l.mensagem, 
  l.idade
  from leads as l
  inner join usuarios_leads on usuarios_leads.fklead = l.id
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