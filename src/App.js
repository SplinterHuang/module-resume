import React, { useState } from 'react';
// import logo from './logo.svg';
import { Router, Route, Link ,hashHistory} from 'react-router'
import Demo1 from './pages/Demo1.js'
import Workplace from './pages/Workplace.js'
import Default from './pages/Default.js'
import Store from './store/index'
import "./styles/reset.scss"
import "./styles/form.scss"
import { Provider } from 'react-redux'
// import Modal from './components/formWidgets/Modal'

function RoutedApp(){
  // let [modalVisible,setModalVisible]=useState(false)
  // let [modalChildren,setMModalChildren]=useState(null)
  // let modalOkCallback
  // React.Component.prototype.$showModal = (children,okCallback) => {
  //    setModalVisible(true)
  //    setMModalChildren(children)
  //    modalOkCallback = okCallback
  // }
  return (
    <Provider store={Store}>
      <Router history={hashHistory} >
        <Route path="/" component={Default} />
        <Route path="/workplace" component={Workplace} />
        <Route path="/demo1" component={Demo1} />
      </Router>
      {/* <Modal 
        visible={modalVisible} 
        onOk={()=>{ modalOkCallback && modalOkCallback()}}
        onCancel={()=>{setModalVisible(false)}}>
        {modalChildren}
      </Modal> */}
    </Provider>
    )
}
export default RoutedApp;