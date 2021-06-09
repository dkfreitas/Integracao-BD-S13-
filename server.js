const express = require('express') 
const app = express() 

const db = require('./src/data/database')
db.connect()


app.use(express.json())


const filmesRouter = require('./src/routes/filmes.routes')
app.use('/filmes',filmesRouter) 

app.listen(3333, ()=> console.log('Servidor rodando')) 