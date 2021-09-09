import React from 'react';
import { Layout, Menu } from 'antd';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar(props) {
    return (
        <Sider onCollapse={props.toggle} collapsible collapsed={props.collapsed} className="left-side-bar">
            <div className="logo" />
            <Menu theme="dark" mode="inline">
                {
                    props.navItems.map((navItem) => {
                        if (!navItem.children) {
                            return (
                                <Menu.Item key={navItem.key} icon={React.createElement(navItem.icon)}>
                                    <Link to={navItem.to}>{navItem.name}</Link>
                                </Menu.Item>
                            );
                        } else {
                            return (
                                <SubMenu
                                    key={navItem.key}
                                    icon={React.createElement(navItem.icon)} 
                                    title={navItem.name}
                                >
                                    {
                                        navItem.children.map((child) => {
                                            return (
                                                <Menu.Item key={child.key}>
                                                    <Link to={child.to}> {child.name} </Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            );
                        }
                    })
                }
            </Menu>
        </Sider>
    )
}
