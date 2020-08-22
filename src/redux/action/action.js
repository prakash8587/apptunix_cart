export const fetchProductList = () => ({
        type: "FETCH_PRODUCT"
});

export const addToCart = data => ({
    type: "ADD_TO_CART",
    payload: data
});

export const changeQuantity = (index, toDo) => ({
    type: "CHANGE_QUANTITY",
    payload: index,
    toDo: toDo
});

export const placeOrder = () => ({
    type: "PLACE_ORDER"
})

export const resetOrderStatus = () => ({
    type: "RESET_ORDER_STATUS"
})
