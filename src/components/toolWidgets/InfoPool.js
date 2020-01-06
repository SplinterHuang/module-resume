import React, { Component } from 'react';
import "./InfoPool.scss"
import { connect } from 'react-redux';
import ResumeInfo from "../resumeWidgets/Info"
class InfoPool extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (  
      <div className="r-info-pool">
        {/* <button onClick={this.addInfo.bind(this)}>添加</button>
        <button onClick={this.addInfo.bind(this)}>缩小</button>
        <button onClick={this.addInfo.bind(this)}>放大</button>
        <button onClick={this.addInfo.bind(this)}>收起</button>
        <button onClick={this.addInfo.bind(this)}>展开</button> */}
        {
          this.props.info.map((info) => {
             return <ResumeInfo info={info}></ResumeInfo>
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