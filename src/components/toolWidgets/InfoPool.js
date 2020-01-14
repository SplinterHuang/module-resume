import React, { Component } from 'react';
import "./InfoPool.scss"
import { connect } from 'react-redux';
import ResumeInfo from "../resumeWidgets/Info"
import {Icon} from 'antd';
class InfoPool extends Component {
  constructor(props) {
    super(props);
    this.state= {
      collapsed:false
    }
  }
  toggle(){
    this.setState((prevState) => {
      return {
          collapsed:!prevState.collapsed
      } 
    })
  }
  render() { 
    return (  
      <div className="r-info-pool" style={{width:this.state.collapsed?"0px":""}}>
        <Icon
          style={{color:"#ccc",fontSize:20,position:"relative",left:-20}}
          type = {
              this.state.collapsed ? 'menu-fold' : 'menu-unfold'
          }
          onClick={this.toggle.bind(this)}
        />
        {/* <button onClick={this.addInfo.bind(this)}>添加</button>
        <button onClick={this.addInfo.bind(this)}>缩小</button>
        <button onClick={this.addInfo.bind(this)}>放大</button>
        <button onClick={this.addInfo.bind(this)}>收起</button>
        <button onClick={this.addInfo.bind(this)}>展开</button> */}
        {
          this.props.info.map((info,index) => {
             return <ResumeInfo info={info} showUse key={index}></ResumeInfo>
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    info:state.resume.infoPool
  }
}
export default connect(mapStateToProps,null)(InfoPool);