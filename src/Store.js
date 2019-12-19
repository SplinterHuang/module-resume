import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from  'redux';
// import thunkMiddleware from 'redux-thunk'

import AppReducer from './Reducer.js';
// import Filters from './components/Filters/index.js'
// import Todos from './components/Todos/index.js'


function doNothingMiddleware({dispatch,getsetate}){
  return (next) => {
    return (action) => {
      console.log('do nothing middleware')
      return next(action)
    }
  }
}
// const middlewares = [thunkMiddleware,doNothingMiddleware];
const middlewares = [doNothingMiddleware];
 
const reducer = combineReducers({
  app:AppReducer,
  // todos:Todos.reducer,
})

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
   (f) => f,
);

const store = createStore(
  reducer,
  {},storeEnhancers
);
console.log('store',store)

export default store