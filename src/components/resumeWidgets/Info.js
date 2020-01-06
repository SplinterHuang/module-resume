import React, {Component} from 'react';
import {} from 'prop-types';
class ResumeInfo extends Component {
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
        </h3>
        {itemEl}
      </div>
    );
  }
}
ResumeInfo.propTypes = {
  // info:
}
export class Title{
  constructor({cn}){
    this.displayType = "resumeTitle"
    this.cn = cn
    // this.items = []
    // this.infoClass = infoClass
  }
}
export class Content{

}
export class Item{

}

export class Info {
  constructor({displayType,infoClass}){
    this.displayType = displayType
    this.items = []
    this.infoClass = infoClass
  }
  addItem(item,index){ //item class
    // {
    //   cn: "他是人类七国之一——暴风城的国王。"
    // }
    if(index === undefined){
      this.items.push(item)
    }
  }
  removeItem(index){

  }
  static showDisplayTypes(){
    return [
      "inline", "block", "label", "resumeTitle",
    ]
  }
}


export default ResumeInfo;