//import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './styles.css';

const { SubMenu } = Menu;

export default function NavSide() {
    const [current, setCurrent] = useState("1");
    //const [inlineCollapsed, setInlineCollapsed] = useState(false)
    function handleClick(e) {
        //setInlineCollapsed(!inlineCollapsed);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu
                onClick={handleClick}
                style={{ width: 256, backgroundColor: "black" }}
                //defaultOpenKeys={['sub1']}
                //inlineCollapsed={true}
                selectedKeys={current}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );
}