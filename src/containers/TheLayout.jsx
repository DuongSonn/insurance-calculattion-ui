import React, { useState } from 'react';
import { Layout, Breadcrumb  } from 'antd';
import HeaderLayout from './Header/HeaderLayout';
import Sidebar from './Sidebar/Sidebar';
import ContentLayout from './Content/ContentLayout';
import routes from '../routes';
import { nav } from '../configs/index';
import { useLocation } from 'react-router';
import './TheLayout.css';

const { Content } = Layout;


export default function TheLayout() {
    const currentLocation = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <Sidebar
                collapsed={collapsed}
                toggle={toggle}
                navItems={nav}
            ></Sidebar>
            <Layout className="site-layout">
                <HeaderLayout 
                    collapsed={collapsed}
                    toggle={toggle}
                ></HeaderLayout>
                <Content 
                    style={{ padding: '0 50px', marginTop: 64, overflow: 'initial' }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        { currentLocation.pathname.split('/').map((location, index) => {
                            return (
                                <Breadcrumb.Item 
                                    key={index}
                                >
                                    {location.charAt(0).toUpperCase() + location.slice(1)}
                                </Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                    <ContentLayout routes={routes}></ContentLayout>
                </Content>
            </Layout>
        </Layout>
    )
}
