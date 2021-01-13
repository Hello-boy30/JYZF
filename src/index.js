// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import { Row, Col, Collapse, Select, Table } from 'antd';
import { RightOutlined, LeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import tx from './img/tx.jpg'

const { Option } = Select;
let notices = {
  type: '升级',
  nr: '家韵助手上线了'
}

class Judge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        <div style={{ flex: '1', margin: '10px 5px 5px 10px', paddingBottom: '10px', borderBottom: '1px solid #cccccc' }}>无效房源<RightOutlined style={{ float: 'right' }} /></div>
        <div style={{ flex: '1', margin: '10px 10px 5px 5px', paddingBottom: '10px', borderBottom: '1px solid #cccccc' }}>VIP房源<RightOutlined style={{ float: 'right' }} /></div>
      </div>
    )
  }
}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.delet();
    this.state = {
      data: new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1),
    }
  }
  delet() {
    setInterval(() => {
      this.setState({ data: new Date(this.state.data.getTime() - 1000) })
    }, 1000);
  }
  render() {

    return (
      <span>
        <span style={{ color: 'red' }}>{this.state.data.getHours()}</span>时
        <span style={{ color: 'red' }}>{this.state.data.getMinutes()}</span>分
        <span style={{ color: 'red' }}>{this.state.data.getSeconds()}</span>秒
      </span>
    )
  }
}
class Notice extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='disF pB'>
        <span className='smallPadding backC borderR' style={{ flex: .5 }}>{this.props.type}</span>
        <span className='pL' style={{ flex: 2 }}>{this.props.nr}</span>
        <span style={{ flex: 1 }}></span>
        <span className='floatR' style={{ flex: .8, wordWrap: 'break-word' }}>14:22</span>
      </div>
    )
  }
}
function handleChange(){
  
}
class Check extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div style={{ display: 'flex', padding: '10px 0 10px 0', borderBottom: '1px solid #cccccc', alignItems: 'center' }}>
      <div style={{ flex: '.8' }}></div>
      <div style={{ flex: '2' }}>
        <p style={{ fontWeight: '800', color: 'black' }}>书香大地花园 <span style={{ fontWeight: '800', color: 'black' }}>100022</span></p>
        <p style={{ fontSize: '10px', paddingTop: '8px' }}>据审核自动拒绝还剩: <Square /></p>
      </div>
      <div style={{ flex: '.1' }}></div>
      <div style={{ flex: '2' }}>
        <p > 预录入新增房源验证举证</p>
        <p style={{ fontSize: '10px', paddingTop: '8px' }}>2021-01-03 17:25</p>
      </div>
      <div style={{ flex: '.5', border: '1.5px solid #cccccc', textAlign: 'center', padding: '5px', borderRadius: '3px' }}>查看详情</div>
      <div style={{ flex: '.1' }}></div>
      <div style={{ flex: '.5' }}>
        <Select defaultValue="待审核" onChange={handleChange} style={{ width: '90px', backgroundColor: '' }}>
          <Option value="jack">通过</Option>
          <Option value="lucy">拒绝</Option>
        </Select>
      </div>
    </div>
    )
  }
}
class Data extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <Col span={6}>
      <div style={{ borderRight: '1px solid #ccc', padding: '0 0px 0 10px' }}>
        <p>带看量</p>
        <div style={{ display: 'flex' }}>
          <span style={{ flex: '1', fontWeight: '700', fontSize: '20px' }}>20套</span>
          <span style={{ flex: '1' }}>日同比</span>
        </div>
      </div>
    </Col>
    )
  }
}
moment.locale('zh-cn');
const { Panel } = Collapse;
const dataSource = [
  {
    key: '1',
    top: 1,
    name: <div style={{}}><img width='20px' height='20px' style={{ borderRadius: '10px', verticalAlign: 'top' }} src={tx}></img> <span>吴彦祖</span></div>,
    idCard: '001',
    store: '西湖区湖底公园1号',
    wi: '81.1'
  },
  {
    key: '2',
    top: 2,
    name: <div style={{}}><img width='20px' height='20px' style={{ borderRadius: '10px', verticalAlign: 'top' }} src={tx}></img> <span>吴彦祖</span></div>,
    idCard: '002',
    store: '西湖区湖底公园1号',
    wi: '81'
  },
  {
    key: '3',
    top: 3,
    name: <div style={{}}><img width='20px' height='20px' style={{ borderRadius: '10px', verticalAlign: 'top' }} src={tx}></img> <span>吴彦祖</span></div>,
    idCard: '002',
    store: '西湖区湖底公园1号',
    wi: '81'
  },
];

const columns = [
  {
    title: '排名',
    dataIndex: 'top',
    key: 'name',
  },
  {
    title: '经纪人',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '工号',
    dataIndex: 'idCard',
    key: 'idCard',
  },
  {
    title: '门店',
    dataIndex: 'store',
    key: 'store',
  },
  {
    title: 'wi分',
    dataIndex: 'wi',
    key: 'score',
  },
];
class App extends React.Component {
  render() {
    return (
      <div>
        <Row className='header'>
          <Col span={14} className='header-icon'><img></img></Col>
          <Col span={2}>昆明市</Col>
          <Col span={2}>系统管理员</Col>
          <Col span={2}>邮箱</Col>
          <Col span={2}>提醒</Col>
          <Col span={2}><img></img>用户名</Col>
        </Row>
        <div className='content'>
          <div className='content-right'>
            <p className='sy'>首页</p>
            <Collapse ghost expandIconPosition='right'>
              <Panel header="新房管理" key="1">
                <p>one</p>
              </Panel>
              <Panel header="房源" key="2">
                <p>one</p>
              </Panel>
              <Panel header="人事管理" key="3">
                <p>组织管理</p>
                <p>加盟商管理</p>
                <p>人员管理</p>
                <p>黑名单</p>
              </Panel>
              <Panel header="新房楼盘" key="4">
                < p>one</p>
              </Panel>
            </Collapse>,
        </div>
          <div className='content-left'>
            <div className='Tag'>
            </div>
            <div className='banner'>
              <p style={{ color: 'white', fontSize: '30px', margin: '0px', fontWeight: '800' }}>banner条</p>
              <p style={{ color: '#E4D3F3', fontSize: '14px', marginTop: '10px' }}>使用家韵管理系统，轻松管理房源，客源 <span style={{ cursor: 'pointer', borderBottom: '1px solid white', color: '#E4D3F3', fontSize: '14px' }}> 开启引导 </span></p>
            </div>
            
            <div className='context'>
              <div className='context-left'>
               
                <div className='data'>
                  <div style={{ borderBottom: '.5px solid #cccccc', paddingBottom: '10px', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>昨日数据</div>
                    <div style={{ flex: '.5' }}></div>
                    <div style={{ flex: '3', display: 'flex', border: '1px solid #7d19af', borderRadius: '5px' }}>
                      <span style={{ flex: "1", backgroundColor: '#7d19af' }}>租聘</span>
                      <span style={{ flex: "1" }}>买卖</span>
                      <span style={{ flex: "1" }}>新房</span>
                    </div>
                    <div style={{ flex: '2' }}></div>
                    <div style={{ flex: '3', display: 'flex', alignItems: 'center' }}>
                      <span style={{ flex: "1" }}>昨日</span>
                      <span style={{ flex: "1" }}>7日</span>
                      <span style={{ flex: "1" }}>30日</span>
                      <span style={{ flex: "1" }}>90日</span>
                    </div>
                    <div style={{ flex: '.5' }}></div>
                    <div style={{ backgroundColor: '#7d19af', flex: "1.5", borderRadius: '5px', color: 'white', padding: '2px 0 2px 0' }}>
                      查看更多
                  </div>
                  </div>
                  <Row style={{ paddingTop: '10px' }}>
                    <Data></Data>
                    <Data></Data>
                    <Data></Data>
                    <Data></Data>
                  </Row>
                  <Row style={{ paddingTop: '10px' }}>
                    <Data></Data>
                    <Data></Data>
                    <Data></Data>
                  </Row>
                </div>
               
                <div className='check'>

                  <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ flex: '.5' }}><LeftOutlined /></div>
                    <div style={{ flex: '2' }}>举证审核 <span style={{ borderRadius: '50%', backgroundColor: '#cccccc' }}>13</span></div>
                    <div style={{ flex: '2' }}>房源推荐审核 <span style={{ borderRadius: '50%', backgroundColor: '#cccccc' }}>13</span></div>
                    <div style={{ flex: '2' }}>实勘审核 <span style={{ borderRadius: '50%', backgroundColor: '#cccccc' }}>13</span></div>
                    <div style={{ flex: '2' }}>无效审核 <span style={{ borderRadius: '50%', backgroundColor: '#cccccc' }}>13</span></div>
                    <div style={{ flex: '2' }}>VIP审核 <span style={{ borderRadius: '50%', backgroundColor: '#cccccc' }}>13</span></div>
                    <div style={{ flex: '.5' }}><RightOutlined /></div>
                  </div>

                  <Check></Check>

                  <Check></Check>

                  <Check></Check>

                </div>
                <div style={{ backgroundColor: '#F5F5F5', padding: '10px 0 10px 0', textAlign: 'center', cursor: 'pointer' }}>查看更多<RightOutlined /><RightOutlined /></div>
                
                <div className='top'>
                  <div style={{ padding: '0px 0 10px 0', fontWeight: '800', fontSize: '20px' }}>
                    wi分排行榜
                </div>
                  <Table dataSource={dataSource} columns={columns} pagination={false} />
                </div>
              </div>
              
              <div className='context-right'>
                <div className='user'>
                  <div style={{ flex: 1, overflow: 'hidden', borderRadius: '50% 50%', backgroundColor: 'blue', marginRight: '10px', height: '100%' }}>
                    <img src={tx} width={'100%'} height={'100px'}></img>
                  </div>
                  <div style={{ flex: 2, fontSize: '12px' }}>
                    <p>经纪人姓名：</p>
                    <p>A1  综合经纪人</p>
                    <p>昆明家韵一店一组</p>
                    <p>工号：00000001</p>
                  </div>
                </div>
                <div className='judge'>
                  <div style={{ padding: "10px 10px 10px 10px", borderBottom: '1px solid #cccccc', fontWeight: '800' }}>房源评审</div>
                  <Judge></Judge>
                  <Judge></Judge>
                  <Judge></Judge>
                </div>
                <div className='notice'>
                  <div style={{ paddingBottom: '10px', display: 'flex' }}>
                    <span style={{ flex: 2 }}>公告</span>
                    <span style={{ flex: 1, textAlign: 'right' }}>查看更多<DoubleRightOutlined /></span>
                  </div>
                  <Notice type={notices.type} nr={notices.nr}></Notice>
                  <Notice type={notices.type} nr={notices.nr}></Notice>
                  <Notice type={notices.type} nr={notices.nr}></Notice>
                  <Notice type={notices.type} nr={notices.nr}></Notice>
                </div>
                <div className='advertising'>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
};

render(<App />, document.getElementById('root'));
