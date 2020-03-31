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

app.get('/api/items/:user_id', ctrl.getItems)
app.get(`/api/item/:item_id`, ctrl.getItem) //needs the query on it
app.get('/api/items/:user_id', ctrl.getUserItems)
app.get(`/api/itemFilter/:user_id/:search_text`, ctrl.searchItems)
app.get('/api/users', ctrl.getUsers)
app.post('/api/item', ctrl.addItem)
app.post('/api/user_item/:user_id', ctrl.addUserItem)
