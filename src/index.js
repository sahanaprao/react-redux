import ReactDOM from 'react-dom';

import './index.css';
import { Provider } from 'react-redux';

import App from './App';
import state from './store/index';

ReactDOM.render(
    <Provider store= {state} >
        <App />
    </Provider>, document.getElementById('root'));
