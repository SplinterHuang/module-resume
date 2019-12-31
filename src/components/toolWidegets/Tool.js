import React, { Component } from 'react';
import "./tool.scss"
import NewInfoInput from "./NewInfoInput"
class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  addInfo(){
    this.refs.infoInput.add()
  }
  render() { 
    return (  
      <div className="r-tool">
        {/* 
          add new 
        */}
        <button onClick={this.addInfo.bind(this)}>添加</button>
        <button onClick={this.addInfo.bind(this)}>缩小</button>
        <button onClick={this.addInfo.bind(this)}>放大</button>
        <button onClick={this.addInfo.bind(this)}>收起</button>
        <button onClick={this.addInfo.bind(this)}>展开</button>
        <NewInfoInput ref="infoInput" onOk={(info) => {
          console.log('info',info,this) 
        }}></NewInfoInput>
      </div>
    );
  }
}
 
export default Tool;