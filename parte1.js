const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Site para o projeto 2 de nuvem. Arthur, Gabriel melo e Rodrigo</h1>");
})

//rota do cadastro de produtos
app.get("/livros", function(req,res){
    res.send("<h1>Encontre aqui os melhores livros!</h1>");
})

//rota com parametro 
app.get("/livro/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("<h1>O livro: " + req.params.parametro + " está disponível!");
})

//rota com parametro opcional
app.get("/pedido/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>O livro já foi enviado para " + nome);
    }else{
        res.send("<h1>O livro está preso em Curitiba</h1>");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
