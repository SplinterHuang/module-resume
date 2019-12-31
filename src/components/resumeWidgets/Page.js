import React, { Component } from 'react';
import ResumeInfo from "./Info";

const ratio = 210/297

class Page extends Component {
  constructor(props) {
    super(props);
    this.currentChildIndex = -1
    this.state = {
      resumeItems:[],
    }
  }
  componentDidMount() {
    // this.renderPageItem()
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps, prevState', prevProps, prevState,)
    // if(this.currentChildIndex<this.props.children.length){
    //   this.renderPageItem()
    // }
  }
  isOverflow(){
    let el = this.refs.page1.children[this.refs.page1.children.length - 1]
    if (el.getBoundingClientRect().height + el.offsetTop > (1111.6 -40)){
      this.setState((oldState) => {
        oldState.resumeItems.pop()
        return {
          resumeItems: oldState.resumeItems
        } 
      })
    }
    console.log('height', el.getBoundingClientRect().height + el.offsetTop)
  }
  renderPageItem(){
    this.currentChildIndex++
    this.setState((oldState, props) => {
       return {
         resumeItems: [...oldState.resumeItems,props.children[this.currentChildIndex]]
       }
    })
    // this.props.children.forEach((item) => {
    //   this.setState((oldState,props) => {
    //     this.state.resumeItems.push(item)
    //   })
    // })
  }
  render() { 
    let resumeInfo = this.props.resumeInfo
    return (  
      <div className="r-pages-box" >
        <div className="r-page" ref="page1" onClick={() => {
          // console.log('this.props.children[3]', this.props.children[3])
          // // 获取不到实例啊
          // // this.props.children[3].itemHeight()
          // // console.log('this.props.children[0].itemHeight()', this.props.children[0].itemHeight())
          // console.log('this.refs', this.refs)
          // let el = this.refs.page1.children[this.refs.page1.children.length - 1]
          // console.log('height',el.getBoundingClientRect().height + el.offsetTop)
          // this.isOverflow()
        }}>
          {/* {this.state.resumeItems} */}
          <ResumeInfo info={resumeInfo.title}></ResumeInfo>
          {
            resumeInfo.infos.map(item=> <ResumeInfo info={item}></ResumeInfo>)
          }
        </div>
      </div>
    );
  }
}
Page.propType = {
  // resumeInfo:
}
export default Page;