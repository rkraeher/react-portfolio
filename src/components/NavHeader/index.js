import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import MenuItem from "./MenuItem";
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
        <Header className="header" style={styles.header} >
            <Menu theme="dark" mode="horizontal" style={styles.header}>
                {
                    MenuItem.map(item => (
                        <Menu.Item key={item.key} className="menu-item">
                            <Link to={item.route} style={styles.menuItem}>
                                <p className="menu-text">{item.name}</p>
                            </Link>
                        </Menu.Item>
                    ))
                }
                <Menu.Item key="5">
                    <a className="menu-item" style={styles.menuItem} target="blank_"
                        href="https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharing">
                        <p className="menu-text">Resume</p>
                    </a>
                </Menu.Item>
            </Menu>

            <NavSide />

        </Header >
    );
}
