import React from 'react'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import './HeaderLayout.css';

const { Header } = Layout;

export default function HeaderLayout(props) {
    return (
        <Header className="site-layout-background" 
            style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}
        >
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: props.toggle,
            })}
        </Header>
    )
}
