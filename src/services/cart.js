//cart actions
// add item
async function addItem(userCart, item) {
    userCart.push(item);
}

//delete item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

//remove item
async function removeItem(UserCart, index) {
    
}

async function displayCart(userCart) {
    console.log("\nShopping Cart List:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
    }

//calculate total
async function calculateTotal(userCart) {
    console.log("\nShopping Cart TOTAL IS:");
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
};