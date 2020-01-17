import { createStore, combineReducers } from 'redux';
import cartReducer from '../Cart/Cart';

const rootReducer = combineReducers ({
cart: cartReducer
})

const Store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)


export default Store; 