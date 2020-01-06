import React, { Component } from 'react';
import "./tool.scss";
import NewInfoInput from "./NewInfoInput";
// import Modal from "./../formWidgets/Modal"
import {Modal,Button} from "antd";
class Tool extends Component {
  constructor(props) {
    super(props);
    // this.setRef = this.setRef.bind(this);
    this.newInfoRef = React.createRef();
    console.log('this.newInfoRef ', this.newInfoRef)
    this.state = { 
      showNewInfo: false,
      newInfoModalVisible:true,
    }
  }
  handleOk = e => {
    console.log(e, this.newInfoRef);

    this.setState({
      newInfoModalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      newInfoModalVisible: false,
    });
  };
  addInfo(){
    // this.setState({
    //   showNewInfo:true,
    // })
    // let NewInfoInputForward = React.forwardRef((props, ref) => (
      // <NewInfoInput ref={ref}/>
    // ))
    this.setState({
      newInfoModalVisible: true,
    });
    // this.$showModal({
    //   onOk:(...args)=>{
    //     console.log("111",args);
    //     // console.log('this.newInfoRef.state', this.newInfoRef.state)
    //   },
    //   // children: <NewInfoInput ref={this.getRef.bind(this)}/>
    //   // children:<NewInfoInputForward ref={this.newInfoRef}/>
    //   children: <NewInfoInput />,
    // })
  }
  // setRef(ref) {
  //   this.newInfoRef = ref;
  // }
  render() { 
    // let NewInfo = ({ setRef }) => <NewInfoInput type="text" ref={setRef} />;
    let NewInfo = React.forwardRef((props, ref) => 
    {
      console.log('ref',ref)
      return (
        <button ref={ref}>123</button>
      // <NewInfoInput ref={ref} className="new-info-input-class">
      //   {/* {props.children} */}
      // </NewInfoInput>
      )
    });
    return (  
      <div className="r-tool">
        <Button onClick={this.addInfo.bind(this)}>添加</Button>
        <Button onClick={this.addInfo.bind(this)}>缩小</Button>
        <Button onClick={this.addInfo.bind(this)}>放大</Button>
        <Button onClick={this.addInfo.bind(this)}>收起</Button>
        <Button onClick={this.addInfo.bind(this)}>展开</Button>
        <Modal
            title="new info"
            visible={this.state.newInfoModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <NewInfoInput ref="newInfoRef"></NewInfoInput>
        </Modal>
      </div>
    );
  }
}
 
export default Tool;