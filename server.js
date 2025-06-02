const express = require("express")
const {message, greetings} = require("./service.js")
const app = new express()
const portNr = 8080

//Hämta in Body-Parser
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Init service
app.listen(portNr, () => {
  console.log(`Service ligger på ${portNr} och lyssnar`)
})

app.get("", (req, res) => {
  res.send(message())
})

app.get("/chas", (req, res) => {
  res.send("Detta är ett meddelande från Chas")
})

app.post("", (req, res) => {
  //Hämta payload från request
  const data = req.body
  res.send( greetings(data.name) )
})