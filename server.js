const express = require("express")
const app = new express()
const portNr = 8080

//Init service
app.listen(portNr, () => {
  console.log(`Service ligger på ${portNr} och lyssnar`)
})