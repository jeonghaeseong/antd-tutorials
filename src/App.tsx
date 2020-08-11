import React, { useState, useEffect } from 'react';
import { Resizable } from 'react-resizable';

import { Layout, Menu, Breadcrumb, Form, Row, Col, Button, Table, Checkbox, DatePicker, Radio, Select } from 'antd';
import { UserOutlined, LayoutOutlined, NotificationOutlined } from '@ant-design/icons';

import AutoComplteEmail from './components/AutoComplteEmail';
import CmCdCascader from './components/CmCdCascader';

import './App.css';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
const { RangePicker } = DatePicker;
const { Option } = Select;

const radioOptions = [
    { label: 'Radio01', value: 'Radio01' },
    { label: 'Radio02', value: 'Radio02' },
    { label: 'Radio03', value: 'Radio03' },
];

function App() {

    const children = [
        { code: '1', name: '한국' },
        { code: '2', name: '중국' },
        { code: '3', name: '미국' },
        { code: '4', name: '캐나다' },
        { code: '5', name: '독일' },
        { code: '6', name: '베트남' },
        { code: '7', name: '홍콩' },
    ].map(value => (<Option key={value.code} value={value.code}>{ value.name }</Option>) );

    // const getFields = () => {
    //     const count = 6;
    //     const children = [];
    
    //     for (let i = 0; i < count; i++) {
    //       children.push(
    //         <Col span={8} key={i}>
    //           <Form.Item
    //             name={`field-${i}`}
    //             label={`Field ${i}`}
    //             rules={[
    //               {
    //                 required: true,
    //                 message: 'Input something!',
    //               },
    //             ]}
    //           >
    //             <Input placeholder="placeholder" />
    //           </Form.Item>
    //         </Col>,
    //       );
    //     }
    
    //     return children;
    // };

    const [columns, setColumns] = useState([
        {
          title: 'Date',
          dataIndex: 'date',
          width: 200,
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          width: 100,
          sorter: (a: any, b: any) => a.amount - b.amount,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          width: 100,
        },
        {
          title: 'Note',
          dataIndex: 'note',
          width: 100,
        },
        {
          title: 'Action',
          key: 'action',
          render: () => <a>Delete</a>,
        },
    ]);

    const [components] = useState({
        header: {
          cell: ResizableTitle,
        },
    });

    const [data] = useState([
        {
          key: 0,
          date: '2018-02-11',
          amount: 120,
          type: 'income',
          note: 'transfer',
        },
        {
          key: 1,
          date: '2018-03-11',
          amount: 243,
          type: 'income',
          note: 'transfer',
        },
        {
          key: 2,
          date: '2018-04-11',
          amount: 98,
          type: 'income',
          note: 'transfer',
        },
    ]);
    
    const [collapsed, setCollapsed] = useState(false);

    

    const [rdoVal, setRdoVal] = useState<string>('Radio01');

    const onChangeRadio = (e: any) => {
        setRdoVal(() => e.target.value);
    };
    
    const handleResize = (index: any) => (e: any, { size }: any) => {

        setColumns(
            (columns) => {
                const nextColumns = [...columns];

                nextColumns[index] = {
                    ...nextColumns[index],
                    width: size.width
                };

                return nextColumns;
            }
        );
    };

    const toggleCollapsed = () => {
        setCollapsed(() => !collapsed);
    };

    const handleChangeSelect = (value: string) => {
        console.log(`selected ${value}`);
    };

    useEffect(()=>{
        setColumns((state) => 
            columns.map((col, index) => ({
                ...col,
                onHeaderCell: (column: any) => ({
                    width: column.width,
                    onResize: handleResize(index),
                }),
            }))
        );
    }, []);

    return (
        <Layout>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
                    <div 
                        className="logo" 
                        style={{
                            height: '32px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            margin: '16px'
                        }}
                    />
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LayoutOutlined />} title="subnav 1">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 1">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
                        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Breadcrumb style={{
                            marginTop: '90px',
                            marginLeft: '20px',
                            marginBottom: '20px'
                        }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '10px 16px',
                            padding: 10,
                            minHeight: 280
                        }}>
                        <Form className="ant-advanced_search-form">
                            <Row gutter={24}>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field99'}
                                        label={'Email'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <AutoComplteEmail />
                                    </Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Form.Item
                                        name={'Field98'}
                                        label={'Checkbox'}
                                    >
                                        <Checkbox>체크박스1</Checkbox>
                                        <Checkbox>체크박스2</Checkbox>
                                        <Checkbox>체크박스3</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field97'}
                                        label={'공통코드'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <CmCdCascader />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field96'}
                                        label={'기간'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <RangePicker />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field95'}
                                        label={'기간+시간'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <RangePicker showTime />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field94'}
                                        label={'Radio'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <Radio.Group
                                            options={radioOptions}
                                            onChange={onChangeRadio}
                                            value={rdoVal}
                                            optionType="button"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name={'Field93'}
                                        label={'Multi Select'}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Input something!',
                                        },
                                        ]}
                                    >
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder="Please select"
                                            onChange={handleChangeSelect}
                                        >
                                            {children}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                {/* {getFields()} */}
                            </Row>
                            <Row>
                                <Col 
                                    span={24}
                                    style={{
                                        textAlign: 'right'
                                    }}>
                                    <Button type="primary" htmlType="submit">Search</Button>
                                    <Button
                                        style={{
                                        margin: '0 8px',
                                    }}>
                                        Clear
                                    </Button>
                                    <a
                                        style={{
                                            fontSize: 12,
                                        }}
                                    >
                                    </a>
                                </Col>
                            </Row>
                        </Form>
                        <div className="search-result-list" style={{ padding: 10 }}>
                            <Table bordered components={components} columns={columns} dataSource={data} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>JHS ©2020 Created by JHS</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

const ResizableTitle = (props: any) => {

    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                className="react-resizable-handle"
                onClick={e => {
                    e.stopPropagation();
                }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
            >
            <th {...restProps} />
        </Resizable>
    );
};
  

export default App;
