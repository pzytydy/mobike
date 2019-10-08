import React from 'react';
import {Card,Button} from 'antd'
import './index.less'
export default class IButton extends React.Component{

    state={
        loading:true
    }

    handleCloseLoading=()=>{
        this.setState({
            loading:!true
        })
    }

    render(){

        return <div>
               <Card title='基础按钮'>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
               </Card>
               <Card>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" shape="circle">
                    A
                    </Button>
                    <Button type="primary" icon="search">
                    Search
                    </Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">
                    Search
                    </Button>
                    <Button type="dashed" icon="arrow-down">
                    Search
                    </Button>
               </Card>

               <Card title='Loading按钮'>
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button>Default</Button>
                    <Button  shape="circle"  type="primary" loading={this.state.loading}></Button>
                    <Button type="danger" loading={this.state.loading}>Danger</Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
               </Card>
        </div>
          
    }
}