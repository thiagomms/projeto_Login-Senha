const controller = {};

controller.home = (req, res) => {
    res.render('ProjetoLoginBBconta3', {message: null})
}

controller.continuada = (req, res) => {
    res.render('deubom')
}

controller.checado = (req, res) => {
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    req.getConnection((err, connection) => {
        const query = connection.query('SELECT * FROM testo.tb WHERE agencia= ? ;', agencia, (err, result) => {

            const linhas = (Object.keys(result).length);

            if (linhas > 0) {
                res.render('logado.ejs', {
                    message: 'Bem vindo cliente da agência ' + agencia + ' e conta ' + conta
                })
            }
            else {
                res.render('ProjetoLoginBBconta3.ejs', {
                    message: 'Agência e conta não encontrada / não existe'
                })
            }
        })
    })
}

module.exports = controller;