//cart actions
// add item
async function addItem(userCart, item) {
    userCart.push(item);
}

//delete item
async function deleteItem(userCart, name) {
    
}

//remove item
async function removeItem(UserCart, index) {
    
}

//calculate total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}