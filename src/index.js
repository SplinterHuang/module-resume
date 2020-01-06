import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ModalContainer from "./components/Modal/index";
import platform from './utils/platform'
// var modalRef
// import Store from './store/index'
// import { Provider } from 'react-redux'
// const refFn = (ref) => {
//   window.modalRef = ref
// }
// const modalContainer = <Provider store={Store}><ModalContainer ref={refFn}/></Provider>
// console.log('modalContainer', modalContainer)
React.Component.prototype._r_platform = platform
console.log('React', React)


// ReactDOM.render(modalContainer, document.getElementById('modal'));
// setTimeout(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  // React.Component.prototype.$showModal = window.modalRef.show
// }, 0);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

