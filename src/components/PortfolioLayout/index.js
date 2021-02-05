import { Layout, Menu } from 'antd';
import { useState } from "react";
import Project from "../Project";
import Bio from "../Bio";
import PortCards from "../PortCards";
import Home from "../Home";
import { TiHome } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import "./styles.css";

const { Header, Content, Footer } = Layout;

//TODO: Add Moment.js to footer data for dynamic year update. 

function PortfolioLayout() {
    const [currentView, setCurrentView] = useState(<Home />);
    const [footer, setFooter] = useState("Rudi Kraeher ©2021");

    function handleLeave(e) {
        e.target.style.background = "#284B63";
        e.target.style.color = "white";
        setFooter("Rudi Kraeher ©2021");
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
                        <Menu.Item
                            key="1"
                            className="menu-item"
                            style={{ color: "white" }}
                            onClick={() => setCurrentView(<Bio />)}>
                            <span className="menu-icon"><FaUserAlt /></span>
                            <p className="menu-text">Bio</p>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            className="menu-item"
                            style={{ color: "white" }}
                            onClick={() => setCurrentView(<PortCards />)}>
                            <span className="menu-icon"><BsFillBriefcaseFill /></span>
                            <p className="menu-text">Projects</p>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a className="menu-item" style={{ color: "white" }} target="blank_"
                                href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                                <span className="menu-icon"><IoDocumentText /></span>
                                <p className="menu-text">Resume</p>
                            </a>
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            className="menu-item"
                            style={{ color: "white" }}
                            onClick={() => setCurrentView(<Home />)}>
                            <span><AiFillPhone className="menu-icon" /></span>
                            <p className="menu-text">Contact</p>
                        </Menu.Item>
                        <Menu.Item
                            key="5"
                            style={{ float: "right", color: "white" }}
                            onClick={() => setCurrentView(<Home />)}>
                            <span className="menu-icon"><TiHome /></span>
                            <p className="menu-text">Rudi Kraeher</p>
                        </Menu.Item>
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

