SELECT DISTINCT i.item FROM items i
FULL JOIN user_items ui ON i.item_id = ui.item_id
JOIN user_a u ON u.user_id = ui.user_id
WHERE u.user_id != ${user_id} 
ORDER BY i.item ASC
LIMIT 20;