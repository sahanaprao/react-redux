import { createSlice } from '@reduxjs/toolkit';

const initialCartItemState = { items: [], totalQuantity: 0, hasChanged: false};

const cartItemSlice = createSlice({
    name:'cartItem',
    initialState: initialCartItemState,
    reducers: {
        addItem(state, actions) {
            const existingItem = state.items.find( ({ id }) => id === actions.payload.id);
            state.hasChanged = true;
            if(existingItem) {
                existingItem.quantity++;
                existingItem.total += existingItem.price;
            } else {
                state.items.push(actions.payload);
            }
            state.totalQuantity++;
        },
        removeItem(state, actions) {
            const existingItem = state.items.find( item => item.id === actions.payload.id);
            state.hasChanged = true;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter( item => item.id !== existingItem.id);
                state.total -= actions.payload.price; 
            } else {
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
            }
            state.totalQuantity--;
        },
        setItems(state, actions) {
          state.items = actions.payload.items;
          state.totalQuantity = actions.payload.totalQuantity
        }
    }
});

export default cartItemSlice.reducer;

export const cartItemActions = cartItemSlice.actions;