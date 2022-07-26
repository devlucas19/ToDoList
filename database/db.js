const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/TDL', () => {
    console.log("MongoDB CONECTADO")
})

module.exports = mongoose.connection