import React, { Component } from 'react';
import Modal from "../formWidgets/Modal"

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.id = 0
    
    this.state = { 
      modals:[]
     }
     this.show = this._show.bind(this)
  }
  _show(option){
    // console.log('onOk', {onOk})
    
    this.setState((oldState) =>{
      console.log(oldState, 'oldState');
      return {
         modals:[...oldState.modals,{
            ...option,
            onOk:(modalInstance) => {
              option.onOk && option.onOk(modalInstance)
            },
            ref:null,
            visible:true,
            id: this.id++
          }
        ]
      }
    })
  }
  remove(index){
    this.state.modals.splice(index,1)
    this.setState({})

  }
  onCancel(index){
    // this.state.modals[index].visible=false
    // this.state.modals.splice(index, 1)
    this.remove(index)
    // this.setState({})
  }
  onOk(index){
    let modal = this.state.modals[index]
    modal.onOk 
      && modal.onOk(modal);
    // this.state.modals[index].visible = false
    this.remove(index)
    // this.setState({})
  }
  render() { 
    return ( 
      <div>
        {
          this.state.modals.map((item,index) => {
            return <Modal 
              visible={item.visible} 
              key={item.id} 
              onCancel={this.onCancel.bind(this,index)}
              onOk={this.onOk.bind(this,index)}>
                {item.children}
              </Modal>
          })
        }
      </div>
     );
  }
}
 
export default ModalContainer;