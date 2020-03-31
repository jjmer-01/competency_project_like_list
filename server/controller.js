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
        const dbObj = req.app.get('db')
        const items = await.dbObj.get_items
        if(items[0]) {
            res.status(200).send(items)
        } else {
            res.sendStatus('no items')
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

    searchItems: async(req, res) => {
        const { search_text } = req.query
        const { user_id } = req.params
        const dbObj = req.app.get('db')
        const searchedItems = dbObj.search_items({user_id, search_text})
        if(searchedItems[0]) {
            res.status(200).send(searchedItems)
        } else {
            return 'no matching items found'
        }
    },

    addItem: async(req, res) => {

    },

    addUserItem: async(req, res) => {
        
    }
}