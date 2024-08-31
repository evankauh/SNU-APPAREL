import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemExists = state.itemList.find((item) => item.id === newItem.id);
            if (itemExists) {
                itemExists.quantity++;
                itemExists.totalPrice += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.images,
                });
                state.totalQuantity++;
            }
        }
    }
})

export const CartActions = cartSlice.actions;
// export const () = cartSlice.actions;
export const selectTotalQuantity = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((acc) => acc + 1, 0)
);
  
export const selectTotalPrice = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0)
);
  

export default cartSlice;