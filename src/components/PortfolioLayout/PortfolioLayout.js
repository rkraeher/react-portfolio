/* eslint-disable no-lone-blocks */
import { Layout, Menu } from 'antd';
import { useState } from "react";
import "./PortfolioLayout.css";
import Project from "../Project/Project";
import Bio from "../Bio/Bio";
import PortCards from "../PortCards/PortCards";
import Home from "../Home";

const { Header, Content, Footer } = Layout;

function handleOver(e) {
    e.target.style.background = "#284B63";
    e.target.style.color = "white";
}
function handleLeave(e) {
    e.target.style.background = "#F0F2F5";
    e.target.style.color = "black";
}

function PortfolioLayout() {
    const [currentView, setCurrentView] = useState(<Home />);

    return (
        <div>
            <Layout className="layout">
                <Header className="header" style={{ backgroundColor: "#284B63" }}>
                    <Menu theme="dark" mode="horizontal" style={{ backgroundColor: "#284B63", fontSize: "1.5vw" }}>
                        <Menu.Item key="1" onClick={() => setCurrentView(<Bio />)}>Bio</Menu.Item>
                        <Menu.Item key="2" onClick={() => setCurrentView(<PortCards />)}>Projects</Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                        <Menu.Item key="4">
                            <a target="blank_" href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                                Resume
                            </a>
                        </Menu.Item>
                        <Menu.Item key="5" style={{ float: "right" }} onClick={() => setCurrentView(<Home />)}>Rudi Kraeher</Menu.Item>
                    </Menu>
                </Header>
                <Content className="content">
                    <div className="site-layout-content">
                        <Project currentView={currentView} />
                    </div>
                </Content>
                {/* Put github icons down here? */}
                <Footer style={{ textAlign: 'center', fontSize: "1.5vw" }} onMouseOver={handleOver} onMouseLeave={handleLeave} onClick={() => window.scrollTo(0, 0)}>Rudi Kraeher ©2020
                </Footer>
            </Layout>
        </div>
    );
}

export default PortfolioLayout;

