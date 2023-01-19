import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({ ...action.payload })
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price * action.payload.quantity

        },

        deleteProduct: (state, action) => {
            state.totalQuantity -= 1;
            state.products = state.products.filter(item => item._id !== action.payload._id);
            state.totalPrice -= action.payload.price * action.payload.quantity;
        }

    }
})

// export all actions
export const { addProduct, deleteProduct } = cartSlice.actions;

// export reducers
export default cartSlice.reducer;