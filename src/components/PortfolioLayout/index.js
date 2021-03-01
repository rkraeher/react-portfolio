import { Layout } from "antd";
import { useState } from "react";
import Project from "../Project";
import NavHeader from "../NavHeader";
import "./styles.css";

const { Content, Footer } = Layout;
const styles = {
    footer: {
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#284B63",
        color: "white",
        transition: "0.3s"
    }
};

//TODO: Add Moment.js to footer data for dynamic year update. 

function PortfolioLayout() {
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
                <NavHeader />
                <Content className="content">
                    <div className="site-layout-content">
                        <Project />
                    </div>
                </Content>
                <Footer style={styles.footer}
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

