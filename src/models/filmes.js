const mongoose = require('mongoose')


const filmesSchema = new mongoose.Schema({ 
    
    titulo: {
        type: String,
        required: true
    },
    
    direcao: {
        type: String,
        required: true
    },
    
    descricao: {
        type: String,
        required: true
    },
    
    lancamento: {
        type: Date,
        required: true,
        default:new Date
    }
})


module.exports = mongoose.model('filmes', filmesSchema)