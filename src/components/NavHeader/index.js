import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import NavSide from "../NavSide";

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
        float: "right",
    }
}

export default function NavHeader() {
    return (
        // Map these items
        <Header className="header" style={styles.header} >
            <Menu theme="dark" mode="horizontal" style={styles.header}>
                <Menu.Item key="1" className="menu-item">
                    <Link to="/" style={styles.menuItem}>
                        <p className="menu-text">Home</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                    <Link to="/bio" style={styles.menuItem}>
                        <p className="menu-text">Bio</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                    <Link to="/projects" style={styles.menuItem}>
                        <p className="menu-text">Projects</p>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <a className="menu-item" style={styles.menuItem} target="blank_"
                        href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                        <p className="menu-text">Resume</p>
                    </a>
                </Menu.Item>
                <Menu.Item key="5" className="menu-item">
                    <Link to="/contact" style={styles.menuItem}>
                        <p className="menu-text">Contact</p>
                    </Link>
                </Menu.Item>
            </Menu>

            <NavSide />
        </Header >
    );
}
