import {companyesReducer} from './company/reducers';
import { warehouseReducer } from './warehouse/reducers';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { locationReducer } from './location/reducer';

const rootReducer = combineReducers ({
    companies: companyesReducer,
    warehouses: warehouseReducer,
    locations: locationReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    );
  
    return store;
  }