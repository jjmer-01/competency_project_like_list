CREATE TABLE user_a (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item VARCHAR(40)
);

CREATE TABLE user_items (
    user_item_id SERIAL PRIMARY KEY,
    item_id INT REFERENCES items(item_id),
    user_id INT REFERENCES user_a(user_id)
);