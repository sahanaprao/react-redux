import { createSlice } from '@reduxjs/toolkit';

const initialCartButtonState = { isShow : false, notification: { status: '' ,title:'', message: ''} };

const cartButtonSlice = createSlice({
    name: 'cartButton',
    initialState: initialCartButtonState,
    reducers: {
        toggle(state) {
            state.isShow = !state.isShow;
        },
        notification(state, actions) {
            state.notification.message = actions.payload.message;
            state.notification.status = actions.payload.status;
            state.notification.title = actions.payload.title;
        }
    }
})

export default cartButtonSlice.reducer;

export const cartButtonActions = cartButtonSlice.actions;
