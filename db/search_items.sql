SELECT DISTINCT i.item FROM items i
FULL JOIN user_items ui ON i.item_id = ui.item_id
WHERE i.item LIKE '%' || ${search_text} || '%' AND ui.user_id != ${user_id};