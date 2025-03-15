import * as cartService from "./services/cart.js";
import createItem  from "./services/item.js";

const myCart = [];
const myWishlist = [];

console.log("Welcome to your Shopping Cart");

const item1 = await createItem("Capa Kindle", 45.00, 1);
const item2 = await createItem("Pingente Kindle", 15.00, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);