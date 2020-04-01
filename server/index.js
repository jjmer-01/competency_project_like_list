require('dotenv').config()
const express = require('express')
    massive = require('massive')

const ctrl = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT || 4020, () => console.log(`index.js Sever running on ${SERVER_PORT}`))
    console.log(`index.js Database Connected`)
})

//ENDPOINTS

app.get('/api/users', ctrl.getUsers) //success
app.get('/api/items/:user_id', ctrl.getItems) //success
app.get('/api/likes/:user_id', ctrl.getUserItems) //success
app.get(`/api/item`, ctrl.getItem) //query //success
app.get(`/api/itemFilter/:user_id`, ctrl.searchItems) //query (db query issue)

app.post('/api/item', ctrl.addItem) //success
app.post('/api/likes/:user_id', ctrl.addUserItem) //success
