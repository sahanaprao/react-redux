import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartItemActions } from '../../store/cartItem-slice';

const ProductItem = (props) => {

  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addToCart = () => {
    dispatch(cartItemActions.addItem({...props}));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
