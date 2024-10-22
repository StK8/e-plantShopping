import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingPlant = state.items.find(plant => plant.name === name);

        if (existingPlant) {
            existingPlant.quantity++;
        } else {
            state.items.push({name: name, image: image, cost: cost, quantity: 1});
        }

        console.log(JSON.stringify(state.items, null, 2));
    },

    removeItem: (state, action) => {
    },

    updateQuantity: (state, action) => {
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
