import { configureStore } from '@reduxjs/toolkit';

import cartButtonReducer from './cartButton-slice';
import cartItemReducer from './cartItem-slice';

const store = configureStore({
    reducer: {
        cartButton: cartButtonReducer,
        cartItem: cartItemReducer
    }
});

export default store;
