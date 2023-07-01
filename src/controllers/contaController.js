const Conta = require('../models/conta')

function cadastrarView(req, res){
    res.render("conta/cadastroConta.html", {});
}

function cadastrarConta(req, res){
    let conta = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.render("pessoa/cadastrar.html", {pessoa});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", {erro});
    })
}