import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

interface IMenu {
    id: number,
    name: String
};

interface IMenusProps {
    menus: Array<IMenu>
};

const TopNav = ({ menus }: IMenusProps) => {
    return (
        <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
            <Menu mode="horizontal" defaultActiveFirst={true}>
                {menus.map(menu => 
                    (<Menu.Item key={menu.id}>{menu.name}</Menu.Item>))
                }
            </Menu>
        </Header>
    );
};

export default TopNav;