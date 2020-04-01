module.exports = {
    getUsers: async(req, res) => {
        const dbObj = req.app.get('db')
        const users = await dbObj.get_users()
        if(users[0]) {
            res.status(200).send(users)
        } else {
            res.sendStatus(500)
            console.log('no users')
        }
    },

    getItems: async(req, res) => {
        const { user_id } = req.params
        const dbObj = req.app.get('db')
        const items = await dbObj.get_items({user_id})
        if(items[0]) {
            res.status(200).send(items)
        } else {
            res.sendStatus(500)
            console.log('no items')
        }
    },

    getUserItems: async(req, res) => {
        const { user_id } = req.params
        const dbObj = req.app.get('db')
        const userItems = await dbObj.get_user_items({user_id})
        if(userItems[0]) {
            res.status(200).send(userItems)
        } else {
            res.sendStatus(500)
            console.log('no user items')
        }
    },

    getItem: async(req, res) => {
        const { item_id } = req.query
        const dbObj = req.app.get('db')
        const itemDetail = await dbObj.get_item({item_id})
        if(itemDetail[0]) {
            res.status(200).send(itemDetail)
        } else {
            res.sendStatus(400)
            console.log('no item found')
        }
    },

    addItem: (req, res) => {
        const { item } = req.body
        const dbObj = req.app.get('db')
        let newItem = dbObj.add_item({item})
        .then(() => {res.status(200).send(newItem)})
        .catch(() => {res.sendStatus(500)})
    },

    addUserItem: async(req, res) => {
        const { user_id } = req.params
        const { item_id } = req.body
        // console.log(item_id)
        const dbObj = req.app.get('db')
        try {
            let newUserItem = await dbObj.add_liked_item({item_id, user_id})
            res.sendStatus(200)
        }
        catch {res.sendStatus(500)}
            
        
    },

    searchItems: async(req, res) => {
        const { search_text } = req.query
        const { user_id } = req.params
        const dbObj = req.app.get('db')
        const searchedItems = await dbObj.search_items({user_id, search_text})
        if(searchedItems[0]) {
            res.status(200).send(searchedItems)
        } else {
            res.status(500).send('no matching items found')
        }
    },

}