import React from 'react';
import "../Project/Project.css";
import { Row, Col } from "antd";
import ProfilePic from '../ProfilePic/ProfilePic';

const Home = () => {
    return (
        <div>

            <Row gutter={16} className="heading" type="flex" style={{ justifyContent: "start" }}>
                <Col md={12} offset={1}>
                    <h1>Rudi Kraeher</h1>
                    <h2>Full Stack Web Developer</h2>
                    <h3>HTML/CSS | JavaScript | React | Node</h3>
                </Col>
                <ProfilePic />
            </Row>
        </div >
    )
}
export default Home;