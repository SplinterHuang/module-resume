import React, { Component } from 'react';
import {connect} from "react-redux";
class Default extends Component {
  render() {
    return (
      <div className="default">
      {this.props.appName}
      <div>2111111111qoe骄傲圣诞节哦；较为佛；i；金额；哦覅我给；房价网；哦二纺机；饿哦呜i积分呜i哦；二街坊围殴；金佛；文件覅偶；为己任；我；我为兼容；危机佛；危机佛为；囧</div>
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }
// 
function mapSTP(state,){
  return {
    appName:state.app.appName
  }
}
export default connect(mapSTP)(Default)