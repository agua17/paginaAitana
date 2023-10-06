
const express = require ('express')
const app = express()
const path = require('path')

//imprimir un hola mundo

/*app.get('/', function (req,res){
    res.send ('hola mundo')
})*/

// para abrir un html 

app.get('/', function (req,res){
    res.sendFile(path.resolve(__dirname, 'Aguas_Santas/html/Index.html'))
})

//para crearme un puerto
app.listen(3000)


//control + c para cerrar el servidor y poder escribir en el terminal cada vez que quiera actualizar los cambiosc