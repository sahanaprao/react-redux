import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { cartButtonActions } from '../../store/cartButton-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const { totalQuantity } = useSelector(state => state.cartItem);

  const toggleCart = () => {
    dispatch(cartButtonActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
