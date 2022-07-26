const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const path = require('path')
const routes = require('./routes/routes')
const connectDb = require('./database/db')

// SETANDO O TIPO DE ARQUIVO A SER MOSTRADO EM VIEWS
app.set("view engine", 'ejs')
// app.use(express.urlencoded()) //POSSIBILITA RECEBER O BODY DE UM FORM EJS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// ROTA

app.use('/', routes)

app.listen(3000, ()=>{
    console.log("Server's runnign at port 3000")
})