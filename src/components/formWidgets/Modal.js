import React, {Component} from 'react';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  //todo: esc 点外部  关闭
  render() {
    if(!this.props.visible){
      return null
    }
    return (
      <div className="r-modal-box" onClick={this.props.onCancel}>
        <div className="wrapper" onClick={(e)=>{e.stopPropagation()}}>
          <div className="content">
            {this.props.children}
          </div>
          <div className="ctrl-box">
            <button onClick={this.props.onCancel}>取消</button>
            <button onClick={this.props.onOk}>确认</button>
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  // visible:
  // onCancel
  // onOk

}
export default Modal;