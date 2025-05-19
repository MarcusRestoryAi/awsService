const express = require("express")
const message = require("./service.js")
const app = new express()
const portNr = 8080

//Init service
app.listen(portNr, () => {
  console.log(`Service ligger på ${portNr} och lyssnar`)
})

app.get("", (req, res) => {
  res.send(message)
})