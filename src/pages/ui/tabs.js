import React from 'react';
import {Card,Button,Spin,Icon,Alert,Tabs} from 'antd'
import './index.less'
export default class Tables extends React.Component{
    

     callback=(key)=> {
        console.log(key);
      }

    render(){ 
        const { TabPane } = Tabs;

        return <div>
            <Card title="Tab标签" className="card-wrap">
                <Tabs  defaultActiveKey="1" onChange={this.callback}>
                    
                    <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                    
                </Tabs>
            </Card>

            
        </div>
          
    }
}