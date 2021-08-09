import React, { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { sendRequest } from './store/cartItem-actions';
import { getData } from './store/cartItem-actions';

import { useSelector, useDispatch } from 'react-redux';

let isInitial = true;

function App() {

  const dispatch = useDispatch();

  const isShow = useSelector((state) => state.cartButton.isShow);

  const cart = useSelector((state) => state.cartItem);

  const notification = useSelector( (state) => state.cartButton.notification );

  useEffect(() => {
      dispatch(getData());
  },[dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    if(cart.hasChanged) {
      dispatch(sendRequest(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      { notification.message && <Notification status={notification.status} title={notification.title} message={notification.message}/> }
      <Layout>
        { isShow && <Cart /> }
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
