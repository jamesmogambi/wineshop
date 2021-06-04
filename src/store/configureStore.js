import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemsReducer from "../reducers/items";
import filtersReducer from "../reducers/filters";
import cartReducer from "../reducers/cart";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['cart'] // persist cart reducer
};

const rootReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
  cart: cartReducer
});
const pReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
const persistor = persistStore(store);
export { persistor, store };
// export default () => {
//   const store = createStore(
//     combineReducers({
//       items: itemsReducer,
//       filters: filtersReducer,     
//     }),
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// };
