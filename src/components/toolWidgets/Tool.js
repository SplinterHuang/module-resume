import React, { Component } from 'react';
import "./tool.scss";
import NewInfoInput from "./NewInfoInput";
import {Info} from '../resumeWidgets/Info'
import {
  Icon
} from "antd";
import {
  connect
} from "react-redux";
import resumeAction from "../../store/Resume/actions";

import {Modal,Button} from "antd";
class Tool extends Component {
  constructor(props) {
    super(props);
    console.log('this.newInfoRef ', this.newInfoRef)
    this.inputDemo = null
    this.state = { 
      showNewInfo: false,
      newInfoModalVisible:false,
      collapsed: false,

    }
  }
  toggle(){
    this.setState((prevState) => {
      return {
          collapsed:!prevState.collapsed
      } 
    })
  }
  handleOk = e => {
    console.log(e, this.inputDemo);
    let info = new Info({
      displayType: this.inputDemo.state.checkedDisplayType,
      infoClass: this.inputDemo.state.itemTitle,
    })
    this.inputDemo.state.contentInputs.forEach((item) => {
      info.addItem({cn:item.value})
    })
    this.props.addNewInfo(info)
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
    this.setState({
      newInfoModalVisible: true,
    });
  }
  render() { 
    return (  
      <div className="r-tool" style={{transform:this.state.collapsed?"translateY(-100%)":""}}>
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
            <NewInfoInput parentThis={this}></NewInfoInput>
        </Modal>
        <Icon
          style={{color:"#ccc",fontSize:20,position:"absolute",bottom:-18,left:-1}}
          type = {
              this.state.collapsed ? 'down-square' : 'up-square'
          }
          onClick={this.toggle.bind(this)}
        />
      </div>
    );
  }
}
 
function mapDispatchToProps(dispatch,ownProps){
  return {
    addNewInfo(newInfo){
      dispatch(resumeAction.addInfo(newInfo))
    },
  }
}
export default connect(null, mapDispatchToProps)(Tool);
