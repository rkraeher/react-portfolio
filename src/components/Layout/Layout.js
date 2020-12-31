import ReactDOM from "react-dom";
import { Layout, Menu } from 'antd';
import "./Layout.css";
import Project from "../Project/Project";

const { Header, Content, Footer } = Layout;
const mountNode = document.getElementById("root");

ReactDOM.render(
    <Layout className="layout">
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Bio</Menu.Item>
                <Menu.Item key="2">Projects</Menu.Item>
                <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', margin: '50px 0' }}>
            <div className="site-layout-content">
                <Project />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Rudi Kraeher ©2020 Created with React and Ant Design</Footer>
    </Layout>,
    mountNode
);
export default Layout;

{/* Put my name on the right side of the navbar */ }
{/* Menu Items will need to Link */ }
// There is some problem when I reload the page. Might have to do with no router yet