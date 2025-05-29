var database = require("../database/config")


function verQuantidade (){
    var instrucaoSql = `
    select
    count (id) as numUsuarios
    from usuario
    `
    return database.executar(instrucaoSql)

}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, celular, email, mensagem, idade, receber) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, celular, email, mensagem, idade);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.


    var instrucaoSql = `
        insert into leads (nome, celular, email, mensagem, idade, fkusuario) values ('${nome}', '${celular}', '${email}', '${mensagem}', '${idade}', '${receber}');`;
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarPorUsuario(){
    let valor = count.numUsuarios
    console.log( 'Valor retornado do ver verQuantidade',valor);
    
    

    var instrucaoSql = `
    insert into leads (fkusuario) values
    (${receber})
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    verQuantidade,
    cadastrarPorUsuario,
    
};