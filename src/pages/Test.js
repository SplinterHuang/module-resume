import React, { Component } from 'react';
import {
    Layout, Menu,Icon,
} from "antd";
const { Header, Sider, Content } = Layout;

class Test extends Component {
    state = {
      collapsed: false,
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    trigger(){
        return null
        return <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
    }
    render() { 
        return ( 
                <Layout>

                  <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                      
                    </Header>
                    <Content
                      style={{
                        // margin: '24px 16px',
                        // padding: 24,
                        // background: '#fff',
                        minHeight: 600,
                      }}
                    >
                      Content
                    </Content>
                  </Layout>
                  <Sider 
                    reverseArrow 
                    zeroWidthTriggerStyle={
                        {
                            color:"green"
                        }
                    }
                    trigger={null}
                    collapsedWidth={0} 
                    collapsible 
                    collapsed = {
                        this.state.collapsed
                    } >
                    <Icon
                    //   className="trigger"
                      style={{color:"red",fontSize:20,position:"relative",left:-20}}
                      type = {
                          this.state.collapsed ? 'menu-fold' : 'menu-unfold'
                      }
                      onClick={this.toggle}
                    />
                  </Sider>
                </Layout>
         );
    }
}
 
export default Test;