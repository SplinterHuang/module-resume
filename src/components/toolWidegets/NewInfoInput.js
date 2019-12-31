import React, {Component} from 'react';
import {Info} from './../resumeWidgets/Info'
import "./NewInfoInput.scss"
import Modal from "../formWidgets/Modal"
class InfoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: true,
      itemTitle:"",
      contentInputs:[
        {value:"",}
      ],
      checkedDisplayType: 'block',
      displayTypes:[
        {value:"inline",label:"单行多项"},
        {value:"block",label:"多行"},
        {value:"label",label:"经历"},
        {value:"resumeTitle",label:"标题"},
      ]
    }
  }
  hide() {
    this.setState({inputVisible: false})
  }
  add() {
    this.setState({inputVisible: true})
  }
  onContentKeyDown(index,e){
    e.persist()
    // e = e.nativeEvent
    console.log('key down', e,index)
    switch (e.keyCode) {
      case 13://enter
        
        break;
      case 8:
        let prevValue = this.state.contentInputs[index].value
        setTimeout(() => {
          if (e.target.value === prevValue) {
            if(index === 0){
              return
            }
            let startIndex
            this.setState((prevState) => {
              startIndex = prevState.contentInputs[index - 1].value.length
              prevState.contentInputs[index - 1].value = prevState.contentInputs[index - 1].value + prevValue
              prevState.contentInputs.splice(index,1)
              console.log('prevState.contentInputs', prevState.contentInputs)
              return {
                contentInputs:prevState.contentInputs
              }
            })
            setTimeout(() => {
              this.refs[`contentInput_${index-1}`].focus()
              this.refs[`contentInput_${index-1}`].setSelectionRange(startIndex, startIndex)
            }, 0);
          }
        }, 0);
        break;
      default:
        break;
    }
  }
  
  onContentChange(index, e) {
    e.persist()
    let newValue = e.target.value
    // console.log('newValue', ne wValue)
    let arr = newValue.split("\n")
    this.setState((prevState) => {
      prevState.contentInputs[index].value = arr[0]
      if(arr.length>1){
        prevState.contentInputs.splice(index + 1, 0, {
          value: arr[1],
        })
        setTimeout(() => {
          this.refs[`contentInput_${index+1}`].focus()
          this.refs[`contentInput_${index+1}`].setSelectionRange(0, 0)
        }, 0);
      }
      return {
        contentInputs: prevState.contentInputs
      }
    })
   
  }
  renderBlockItems(){
    return (
      <>
        <input type="text"  
        value={this.state.itemTitle} 
        onChange={(e)=>{
          e.persist()
          this.setState({
            itemTitle: e.target.value,
          })
        }} 
        className="r-info-input class-name"/> 
        {
          this.state.contentInputs.map((item,index) => {
            return  <textarea
            name=""
            id=""
            key={index}
            cols="30"
            rows="10"
            ref={`contentInput_${index}`}
            value={item.value}
            onChange={this.onContentChange.bind(this,index)}
            onKeyDown={this.onContentKeyDown.bind(this,index)}
            className="r-info-input r-info-content block"></textarea>
          })
        }
      </>
    )
    
  }
  renderDisplayTypeSelect() {
    return (
      <div className="r-select-box">
        {
          this.state.displayTypes.map((item,index) => {
            return (
              <span key={index}>
                <input type = "radio"
                name = "r-select-type"
                id = {
                  "r-select-type-" + index
                }
                onChange={(e) => {
                  // e.persist()
                  // console.log('e',e)
                  // e.target
                  this.setState({
                    checkedDisplayType:item.value
                  })
                }}
                checked={item.value == this.state.checkedDisplayType}
                className="r-input-radio"
                value={
                  item.value
                }
                />
                <label htmlFor={"r-select-type-"+index}>{item.label}</label>
              </span>
            )
          })
        }
      </div>
    )
  }
  onOk() {
    let info = {
      displayType: this.state.checkedDisplayType,
      items:this.state.contentInput,
    }
    this.props.onOk && this.props.onOk(info)
    this.hide()
  }
  render() {
    return (
      <Modal
        onOk={this.onOk.bind(this)}
        onCancel={this.hide.bind(this)}
        visible={this.state.inputVisible}>
        <div  className="r-info-input-box">
          {this.renderDisplayTypeSelect()}
          {this.renderBlockItems()}
        </div>
      </Modal>

    );
  }
}

export default InfoInput;