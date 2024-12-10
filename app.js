const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send(' BEGIN  EXPRESS JS SERVER ABRAHAM VG')
})

app.get('/json',(req,res) =>{
    res.json({message:"express js activo AVG"});
})

////// delimitar todas las rutas van antes de listen para ser escuchadas
app.listen(port, () => {
  console.log(`APP CON PUERTO OPEN: ${port}`)
})
