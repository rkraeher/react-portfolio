import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
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
                        href="https://drive.google.com/file/d/1fExRHP5TUE8raNq0foWv_sCt2Gy7CG6k/view?usp=sharing">
                        <p className="menu-text">Resume</p>
                    </a>
                </Menu.Item>
            </Menu>

            <NavSide />

        </Header >
    );
}
