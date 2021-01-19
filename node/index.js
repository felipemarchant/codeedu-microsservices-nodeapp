const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'mysql',
    password: 'mysql',
    database: 'mysql'
}

const db  = mysql.createConnection(config)

const page = html => `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Cycle</title>
    </head>
    <body>${html}</body>
    </html>
`

app.get('/', (req, res) => {
    db.query('SELECT * FROM peoples', (error, peoples, fields) => {
        if (error) throw error
        res.send(page(`<h1>Full Cycle Rocks!</h1><ul>${peoples.reduce((ac, people) => ac += `<li>${people.name}</li>`, '')}</ul>`))
    })
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))