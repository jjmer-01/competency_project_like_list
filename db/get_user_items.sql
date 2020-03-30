SELECT item FROM items WHERE item_id IN
    (SELECT item_id FROM user_items WHERE user_id IN
         (SELECT user_id FROM user_a WHERE user_id = ${user_id})
     );