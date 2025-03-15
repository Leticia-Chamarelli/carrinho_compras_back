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