import React, { Component } from 'react';
import {
  Info,
  Title
} from "../components/resumeWidgets/Info";
import Page from "../components/resumeWidgets/Page"
import Tool from "../components/toolWidgets/Tool"
import InfoPool from "../components/toolWidgets/InfoPool"


import "./../styles/common1.scss"
export default class Workplace extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeInfo:{
        title:{},
        infos:[],
      },
    }
  }
  render() {
    return (
      <div>
        <Tool></Tool>
        <InfoPool></InfoPool>
        <Page resumeInfo={this.state.resumeInfo}></Page>
      </div>
    );
  }
}
