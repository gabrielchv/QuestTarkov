const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(express.static(path.join(__dirname, 'frontend/build')))
app.use(bodyParser.json())

const db = mysql.createConnection({
    host: "sql10.freemysqlhosting.net",
    user: "sql10494021",
    password: "xW7cILM9XU",
    database: "sql10494021",
});

app.get('/api/get', (req, res) => {
  db.query("SELECT * FROM `users` WHERE", (err, rows) => {
    if (!err) {
      res.status(200).send({
        data: rows,
      })
    }
    else {
      res.status(400)
    }
  });
})  

app.post('/api/login', (req, res) => {
  db.query("SELECT * FROM `users` WHERE username = '" + req.body.username + "'", (err, rows) => {
    if (Object.keys(rows).length > 0){
      if (rows[0].password == req.body.password){
        res.send("Usuário foi logado")
      }
      else{
        res.send("Senha errada")
      }
    }
    else{
      res.send("Usuário não existe")
    }
  });
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port 8000`)
})