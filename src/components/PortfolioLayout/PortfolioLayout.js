/* eslint-disable no-lone-blocks */
import { Layout, Menu } from 'antd';
import "./PortfolioLayout.css";
import Project from "../Project/Project";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function PortfolioLayout() {
    return (
        <Router>
            <div>
                <Layout className="layout">
                    <Header className="header" style={{ backgroundColor: "#284B63" }}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ backgroundColor: "#284B63", fontSize: "1.5vw" }}>
                            <Menu.Item key="1">
                                <Link to="/bio">Bio</Link>
                            </Menu.Item>
                            <Menu.Item key="2">Projects</Menu.Item>
                            <Menu.Item key="3">Contact</Menu.Item>
                            <Menu.Item key="4">Resume</Menu.Item>
                            <Menu.Item key="5" style={{ float: "right" }}>Rudi Kraeher</Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="content">
                        <div className="site-layout-content">
                            <Project currentView={ } />
                        </div>
                    </Content>
                    {/* Have the footer internally link back to the top. Possibly put github icons down here */}
                    <Footer style={{ textAlign: 'center', fontSize: "1.5vw" }}>Rudi Kraeher ©2020
                </Footer>
                </Layout>
            </div>
        </Router>
    );
}

export default PortfolioLayout;

