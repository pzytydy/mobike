import React from 'react';
import './index.less'
import MenuConfig from './../../config/menuConfig'

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
// const { SubMenu } = Menu.SubMenu;
// const { MenuItemGroup } =Menu.ItemGroup;
export default class NavLeft extends React.Component{

    componentWillMount(){
        // const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode:this.renderMenu(MenuConfig)
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            // console.log(item.children)
            if(item.children){
                
               return (
                <SubMenu key={item.key} title={item.title}
                >{this.renderMenu(item.children)}</SubMenu>
                
               )    
            }
            return  <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }

    render(){

        return <div >
            <div className='logo'>
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>X Z T</h1>
            </div>
            <Menu theme='dark'>
                {this.state.menuTreeNode}            
            </Menu>
        </div>         
          
    }
}