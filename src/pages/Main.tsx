import React, { useState, useEffect } from 'react';
import { Resizable } from 'react-resizable';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Form, Row, Col, Table, Checkbox, DatePicker, Radio, Select, Button } from 'antd';
import { UserOutlined, LayoutOutlined, NotificationOutlined } from '@ant-design/icons';

import AutoComplteEmail from '../components/AutoComplteEmail';
import CmCdCascader from '../components/CmCdCascader';

import SideNav from '../components/common/SideNav';
import TopNav from '../components/common/TopNav';

import User from '../components/user';
import Product from '../components/product';

import '../App.css';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
const { RangePicker } = DatePicker;
const { Option } = Select;

const Main = () => {

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
          render: () => <Button>Delete</Button>,
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
        <BrowserRouter>
            <Layout>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideNav menus={[
                        {
                            id: 1,
                            name: 'subav 1',
                            children: [
                                {
                                    id: 4,
                                    name: 'User',
                                    breadcrumb: ['Menu 1', 'subnav 1', 'User']
                                },
                                {
                                    id: 5,
                                    name: 'Product',
                                    breadcrumb: ['Menu 1', 'subnav 1', 'Product']
                                }
                            ]
                        },
                        {
                            id: 2,
                            name: 'subav 2'
                        },
                        {
                            id: 3,
                            name: 'subav 3'
                        },
                    ]} />
                    <Layout className="site-layout">
                        <TopNav menus={
                            [
                                {
                                    id: 1,
                                    name: 'Menu 1'
                                },
                                {
                                    id: 2,
                                    name: 'Menu 2'
                                },
                                {
                                    id: 3,
                                    name: 'Menu 3'
                                },
                                {
                                    id: 4,
                                    name: '테스트'
                                }
                            ]}
                        />
                        <Breadcrumb style={{
                                marginTop: '90px',
                                marginLeft: '20px',
                                marginBottom: '20px'
                            }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Switch>
                            <Route path="/user" component={User} />
                            <Route path="/product" component={Product} />
                        </Switch>
                        <Footer style={{ textAlign: 'center' }}>JHS ©2020 Created by JHS</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

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

export default Main;