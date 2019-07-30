require('dotenv/config')
const express = require('express')
const massive = require('massive')
const {CONNECTION_STRING,SERVER_PORT} = process.env
const ctrl = require('./controller')

const app = express()
app.use(express.json())
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(SERVER_PORT,'0.0.0.0',()=>console.log(`running on ${SERVER_PORT}`))
})

app.get('/api/cards',ctrl.getCards)
