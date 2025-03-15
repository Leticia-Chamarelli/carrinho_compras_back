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
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound === -1) {
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

    // const deleteIndex = index - 1;

    // if(index >= 0 && index < userCart.lenght) {
    //     userCart.splice(deleteIndex, 1);
    // }
    
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