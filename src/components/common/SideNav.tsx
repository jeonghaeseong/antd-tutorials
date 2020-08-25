import React, { useState, useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LayoutOutlined, NotificationOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import Logo from './Logo';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IMenu {
    id: number,
    name: String,
    children?: Array<IMenu>,
    breadcrumb?: Array<String>
};

interface ISideNavProps {
    menus: Array<IMenu>
};

const SideNav = ({ menus }: ISideNavProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapsed =  useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={onToggleCollapsed}>
            <Logo />
            <Menu
                mode="inline"
                theme="dark"
                defaultActiveFirst={true}
                style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1"><Link to="/user">User</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/product">Product</Link></Menu.Item>
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
    );
    
};

export default SideNav;