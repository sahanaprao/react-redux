import { cartButtonActions } from './cartButton-slice';
import { cartItemActions } from './cartItem-slice';

export const getData = () => {
    return async(dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://react-http-d3349-default-rtdb.firebaseio.com/cart.json');
            const data = response.json();
            return data;
        }

        try {
            const data = await fetchData();
            dispatch(cartItemActions.setItems({
                items: data.items || [],
                totalQuantity: data.totalQuantity
            }));
            dispatch(cartButtonActions.notification({status: '', title:'', message:''}));
        } catch( error ) {
            dispatch(cartButtonActions.notification({status: 'error', title:'failure', message:'There seems to be an error occurred'}));
        }
    }
}


export const sendRequest = (cartItem) => {
    return async(dispatch) => {

        const saveData = async () => {
            const response = await fetch('https://react-http-d3349-default-rtdb.firebaseio.com/cart.json',{
                method: 'PUT',
                body: JSON.stringify(cartItem)
            });
        }

        try {
            await saveData();
            dispatch(cartButtonActions.notification({status: 'success',title:'success!', message: 'Sent cart items successfully'}));
        } catch(error) {
            dispatch(cartButtonActions.notification({status: 'error', title:'failure!', message:'There seems to be an error occurred'}));
        }
    }
}
