import React, {Component} from 'react';
import {
  PropTypes
} from 'prop-types';
import helper from "../../utils/helper";
import {Button} from "antd";
import actions from "../../store/Resume/actions"
import {connect} from "react-redux";
export class Title {
  constructor({
    cn
  }) {
    this.displayType = "resumeTitle"
    this.cn = cn
    this.uuid = helper.newUuid()
    // this.items = []
    // this.infoClass = infoClass
  }
}
export class Content {

}
export class Item {

}

export class Info {
  constructor({
    displayType,
    infoClass
  }) {
    this.displayType = displayType
    this.items = []
    this.infoClass = infoClass
    this.uuid = helper.newUuid()

  }
  addItem(item, index) { //item class
    // {
    //   cn: "他是人类七国之一——暴风城的国王。"
    // }
    if (index === undefined) {
      this.items.push(item)
    }
  }
  removeItem(index) {

  }
  static showDisplayTypes() {
    return [
      "inline", "block", "label", "resumeTitle",
    ]
  }
}

class ResumeInfo extends Component {
  static propTypes = {
    showCtrl: PropTypes.bool,
    // info: PropTypes.object.isRequired.
    // info: PropTypes.PropTypes.objectOf(Info),
    info: function (props, propName, componentName) {
      if (!props.info instanceof Info) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    },
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  renderInlineItems(items) {
    console.log('items', items)
    return (
      <div className="r-info-content-box">
        {
          items.map((item, index) => {
            console.log('item', item)
            return (
              <span key={index} className="r-info-content inline">
                {item.cn}
              </span>
            )
          })
        }
      </div>
    )
  }
  renderBlockItems(items){
    return (
      <div className="r-info-content-box">
        {
          items.map((item, index) => {
            console.log('item', item)
            return (
              <div key={index} className="r-info-content block">
                {item.cn}
              </div>
            )
          })
        }
      </div>
    )
  }
  renderLabelDesc(descs){
    console.log('descs', descs)
    return descs.map((desc) => {
      return <span className="r-info-label-desc">{desc.cn}</span> 
    })
  }
  renderLabelItems(items){
    return (
      <div className="r-info-content-box">
        {
          items.map((item, index) => {
            return (
              <div key={index} className="r-info-label-box block">
                <h3 className="r-info-label-box">
                  <span className="r-info-label">{item.label}</span>
                  {
                   item.labelDescs && item.labelDescs.map((desc,index) => < span className="r-info-label-desc" key={index} > {
                         desc.cn
                       } </span>)
                  }
                </h3>
                {
                  item.contents.map((line, index) => {
                    return <div key={index} className="r-info-content block">
                      {line.cn}
                    </div> 
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
  itemHeight(){
    console.log('ref',this.refs)
    // getBoundingClientRect
  }
  renderCtrlBox(){
    let props = this.props
    // if(!props.showCtrl){
    //   return null
    // }
    return (
      <span>
        {
          props.showUse &&
          <Button onClick={props.useInfo.bind(this,props.info)}>
            使用
          </Button>
        }{
          props.showUnUse &&
          <Button onClick={props.unUseInfo.bind(this,props.info)}>
            移除
          </Button>
        }
      </span>
    )
  }
  render() {
    let info = this.props.info;
    console.log('info',info)
    let itemEl = null;
    switch (info.displayType) {
      case "inline":
        itemEl = this.renderInlineItems(info.items)
        break;
      case "block":
        itemEl = this.renderBlockItems(info.items)
        break;
      case "label":
        itemEl = this.renderLabelItems(info.items)
        break;
      case "resumeTitle":
        return(
          <h1 className = "r-resume-title">{info.cn}</h1> 
        )
      default:
        break;
    }
    return (
      <div ref="box">
        <h3 className="r-info r-class-name">
          {info.infoClass}
          {this.renderCtrlBox()}
        </h3>
        {itemEl}
      </div>
    );
  }
}


function mapDispatchToProps (dispatch,ownProps) {
  return {
    useInfo:(info) => {
       dispatch(actions.useInfo(info))
    },
    unUseInfo: (info) => {
      dispatch(actions.unUseInfo(info)) 
    }
  }
}
export default connect(null,mapDispatchToProps)(ResumeInfo);