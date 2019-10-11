import React from 'react'
import Utils from './../../utils/utils'
import { Table} from 'antd'

export default class ETable extends React.Component{

    state = {}
    //处理行点击事件
    onRowClick = (record, index) => {
        let rowSelection = this.props.rowSelection;
        if(rowSelection == 'checkbox'){
            let selectedRowKeys = this.props.selectedRowKeys;
            let selectedIds = this.props.selectedIds;
            let selectedItem = this.props.selectedItem || [];
            if (selectedIds) {
                const i = selectedIds.indexOf(record.id);
                if (i == -1) {//避免重复添加
                    selectedIds.push(record.id)
                    selectedRowKeys.push(index);
                    selectedItem.push(record);
                }else{
                    selectedIds.splice(i,1);
                    selectedRowKeys.splice(i,1);
                    selectedItem.splice(i,1);
                }
            } else {
                selectedIds = [record.id];
                selectedRowKeys = [index]
                selectedItem = [record];
            }
            this.props.updateSelectedItem(selectedRowKeys,selectedItem || {},selectedIds);
        }else{
            let selectKey = [index];
            const selectedRowKeys = this.props.selectedRowKeys;
            if (selectedRowKeys && selectedRowKeys[0] == index){
                return;
            }
            this.props.updateSelectedItem(selectKey,record || {});
        }
    };

    tableInit = ()=>{
        let row_selection = this.props.rowSelection;
        let selectedRowKeys = this.props.selectedRowKeys;
        const rowSelection ={
            type:'radio',
            selectedRowKeys,
            onChange:this.onSelectChange
        }
        if (row_selection===false || row_selection===null) {
            row_selection = false;
        }else if(row_selection=='checkbox'){
            rowSelection.type=  'checkbox'
        }else{
            row_selection = 'radio'
        }
        return <Table
            bordered
            {...this.props}
            rowSelection = {row_selection?rowSelection:null}
            onRow={(record,index)=>{
                return {
                    onClick:(e)=>{
                        if (!row_selection) return;
                        this.onRowClick(record,index)
                    }
                }
            }}
        />
    }

    render(){
        return (<div>
            {this.tableInit()}
        </div>)
    }
}