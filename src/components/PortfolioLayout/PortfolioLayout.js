/* eslint-disable no-lone-blocks */
import { Layout, Menu } from 'antd';
import "./PortfolioLayout.css";
import Project from "../Project/Project";

const { Header, Content, Footer } = Layout;

function PortfolioLayout() {
    return (
        <div>
            <Layout className="layout">
                <Header className="header" style={{ backgroundColor: "#284B63" }}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ backgroundColor: "#284B63", fontSize: "1.5vw" }}>
                        <Menu.Item key="1">Bio</Menu.Item>
                        <Menu.Item key="2">Projects</Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                        <Menu.Item key="4">Resume</Menu.Item>
                        <Menu.Item key="5" style={{ float: "right" }}>Rudi Kraeher</Menu.Item>
                    </Menu>
                </Header>
                <Content className="content">
                    <div className="site-layout-content">
                        <Project />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', fontSize: "1.5vw" }}>Rudi Kraeher ©2020
                <br></br>
                    <a href="https://www.vecteezy.com/free-vector/portfolio-icon">Portfolio Icon Vectors by Vecteezy</a>
                </Footer>
            </Layout>
        </div>
    );
}

export default PortfolioLayout;

