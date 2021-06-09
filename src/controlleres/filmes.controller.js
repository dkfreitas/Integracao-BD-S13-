const filmes = require('../models/filmes')

const criaFilme = async (req, res)=>{

    const Filme = new Filme({
        titulo: req.body.titulo,
        direcao: req.body.direcao,
        descricao: req.body.descricao,
        lancamento: req.body.lancamento
    })
    
    try {
        const novoFilme = await filmes.save()  
        res.status(201).json(novoFilme) 
    }catch (err){ 
        res.status(400).json({message: err.message})
    }
}

const listaFilmes = async (req, res)=> {
    const filme = await filmes.find() 
    res.status(200).json(filme) 
}

const atualizaFilme = async (req, res)=>{
    try {
        const filme = await filmes.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'Filme não encontrado!'})
        }

        if (req.body.titulo != null) {
            filmes.titulo = req.body.titulo
        }

        if (req.body.descricao != null) {
            filmes.descricao = req.body.descricao
        }

        if (req.body.direcao != null) {
            filmes.direcao = req.body.direcao
        }

        if (req.body.lancamento != null) {
            filmes.lancamento = req.body.lancamento
        }

        const filmeAtualizado = await filmes.save()
        res.json(filmeAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaFilme = async (req, res)=>{
    try {
        const filme = await filmes.findById(req.params.id)
        if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
        }
    
        await filme.remove()
        res.json({ message: 'Filme deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

const listaUmFilme = async (req, res ) => {
    const filme = await filmes.findById(req.params.id)

    if (filme == null) {
        return res.status(404).json({ message: 'Filme não encontrado!'})
    }

    res.json(filme)
}

module.exports = { 
    criaFilme,
    listaFilmes,
    atualizaFilme,
    deletaFilme,
    listaUmFilme
}