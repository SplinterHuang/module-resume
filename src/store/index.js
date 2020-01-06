import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
// import thunkMiddleware from 'redux-thunk'
import ResumeReducer from "./Resume/reducer";


function AppReducer(oldState = {}, action) {
  // switch(action.type){
  //   default: return oldState
  // }
  return {
    appName: "modulized resume",
  }
}
function doNothingMiddleware({
  dispatch,
  getsetate
}) {
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
  app: AppReducer,
  resume: ResumeReducer,
})

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (f) => f,
);

const store = createStore(
  reducer, {}, storeEnhancers
);
console.log('store', store)

export default store