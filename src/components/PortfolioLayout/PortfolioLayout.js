/* eslint-disable no-lone-blocks */
import { Layout, Menu } from 'antd';
import { useState } from "react";
import "./PortfolioLayout.css";
import Project from "../Project/Project";
import Bio from "../Bio/Bio";
import PortCards from "../PortCards";
import Home from "../Home";

const { Header, Content, Footer } = Layout;

function PortfolioLayout() {
    const [currentView, setCurrentView] = useState(<Home />);
    const [footer, setFooter] = useState("Rudi Kraeher © 2020");

    function handleLeave(e) {
        e.target.style.background = "#284B63";
        e.target.style.color = "white";
        setFooter("Rudi Kraeher © 2020");
    }
    function handleOver(e) {
        e.target.style.background = "#F0F2F5";
        e.target.style.color = "black";
        setFooter("Back to the top");
    }


    return (
        <div>
            <Layout className="layout">
                <Header className="header" style={{ backgroundColor: "#284B63" }}>
                    <Menu theme="dark" mode="horizontal" style={{ backgroundColor: "#284B63", fontSize: 25 }}>
                        <Menu.Item key="1" className="menu-item" style={{ color: "white" }}
                            onClick={() => setCurrentView(<Bio />)}>Bio</Menu.Item>
                        <Menu.Item key="2" className="menu-item" style={{ color: "white" }}
                            onClick={() => setCurrentView(<PortCards />)}>Projects</Menu.Item>
                        <Menu.Item key="3" className="menu-item" style={{ color: "white" }}
                            onClick={() => setCurrentView(<Home />)}>Contact</Menu.Item>
                        <Menu.Item key="4">
                            <a className="menu-item" style={{ color: "white" }} target="blank_"
                                href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                                Resume
                            </a>
                        </Menu.Item>
                        <Menu.Item key="5" id="home" style={{ float: "right", color: "white" }}
                            onClick={() => setCurrentView(<Home />)}>Rudi Kraeher</Menu.Item>
                    </Menu>
                </Header>
                <Content className="content">
                    <div className="site-layout-content">
                        <Project currentView={currentView} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', fontSize: 30, backgroundColor: "#284B63", color: "white", transition: '0.3s' }}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}
                    onClick={() => window.scrollTo(0, 0)}>
                    {footer}
                </Footer>
            </Layout>
        </div>
    );
}

export default PortfolioLayout;

