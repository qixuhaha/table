import React, { Component } from 'react'
// import Table from 'antd/lib/table';
import { Table,Tag,Button} from 'antd';
import "./style.css"
import {fetchData} from "../utils/common.utils"
const { CheckableTag } = Tag;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'description',
  dataIndex: 'description',
  width:300,
  className:"description",
  render:(text) => {
    return <div className="descriptionDiv">{text}</div>
}
}, {
  title: 'image',
  dataIndex: 'image',
  width: 150,
  render:(text) => {
    return <img src={text} alt="" style={{width:'5    0px',height:'50px',borderRadius:'50%'}}/>
}
 
}, {
    title: '链接',
    dataIndex: 'humanURL',
    width: 150,
    render:(record) => {
      return <a href={record}>{record}</a>
  }
   
  },
  {
    title: '标签',
    dataIndex: 'tags',
    width: 150,
    render:(text) => {
      return (<div>
          <CheckableTag  checked={true} >{text[0]}</CheckableTag>
          <CheckableTag  checked={true} >{text[1]}</CheckableTag>
          <CheckableTag  checked={true} >{text[2]}</CheckableTag>
      </div>)
  }
   
  },{
    title: '点击显示',
    dataIndex: 'properties',
    width: 150,
    render:(text) => {
        var  columns2 =  [];
        var data2 = [];
      return (<div>
            <Button type="primary" icon="poweroff" onClick={()=>{
              columns2 =  [{
                title: '类型',
                dataIndex: 'type',
                width: 150,
            },{
                title: '路径',
                dataIndex: 'url',
                width: 150,
            }];
            data2 =  text;
            }}>
         点击
        </Button>
        <Table columns={columns2} dataSource={data2}/>
      </div>)  
       
    }
  }];
class Index extends  Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
          }
    }
    render(){

        return (
  <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }}/>
        )
    }
    async componentDidMount() {
        var data = (await fetchData("http://www.mocky.io/v2/5b766d7b3000005700848af9")).apis;
        // console.log(data);
         this.setState({
            data:data
         }) 
       console.log(await fetchData("http://www.mocky.io/v2/5b766d7b3000005700848af9"));
      }
}
export default Index;






// import { Tag } from 'antd';

// const { CheckableTag } = Tag;

// class MyTag extends React.Component {
//   state = { checked: true };

//   handleChange = (checked) => {
//     this.setState({ checked });
//   }

//   render() {
//     return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
//   }
// }

// ReactDOM.render(
//   <div>
//     <MyTag>Tag1</MyTag>
//     <MyTag>Tag2</MyTag>
//     <MyTag>Tag3</MyTag>
//   </div>,
//   mountNode);