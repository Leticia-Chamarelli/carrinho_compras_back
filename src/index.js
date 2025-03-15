import createItem  from "./services/item.js";

const cart = [];

console.log("Welcome to your Shopping Cart");

const item1 = await createItem("Capa Kindle", 45.00, 1);
const item2 = await createItem("Pingente Kindle", 15.00, 3);

console.log(item2.subtotal());
