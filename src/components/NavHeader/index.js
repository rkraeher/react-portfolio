import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

const { Header } = Layout;
const styles = {
    header: {
        backgroundColor: "#284B63",
        fontSize: 25
    },
    menuItem: {
        color: "white"
    },
    menuItemFloat: {
        color: "white",
        float: "right"
    }
}

export default function NavHeader() {
    return (

        < Header className="header" style={styles.header} >
            <Menu theme="dark" mode="horizontal" style={styles.header}>
                <Menu.Item key="1" className="menu-item">
                    <Link to="/react-portfolio/bio" style={styles.menuItem}>
                        <span className="menu-icon"><FaUserAlt /></span>
                        <p className="menu-text">Bio</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                    <Link to="/react-portfolio/projects" style={styles.menuItem}>
                        <span className="menu-icon"><BsFillBriefcaseFill /></span>
                        <p className="menu-text">Projects</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <a className="menu-item" style={styles.menuItem} target="blank_"
                        href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                        <span className="menu-icon"><IoDocumentText /></span>
                        <p className="menu-text">Resume</p>
                    </a>
                </Menu.Item>
                <Menu.Item key="4" className="menu-item">
                    <Link to="/react-portfolio/contact" style={styles.menuItem}>
                        <span><AiFillPhone className="menu-icon" /></span>
                        <p className="menu-text">Contact</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" style={styles.menuItemFloat}>
                    <Link to="/react-portfolio/" style={styles.menuItem}>
                        <span className="menu-icon"><TiHome /></span>
                        <p className="menu-text">Rudi Kraeher</p>
                    </Link>
                </Menu.Item>
            </Menu>
        </Header >
    );
}
