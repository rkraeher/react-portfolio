import React from 'react';
import "../Project/Project.css";
import { Row, Col } from "antd";
import ProfilePic from '../ProfilePic/ProfilePic';

const Home = () => {
    return (
        <div>

            <Row className="heading container">
                <Col md={6}>
                    <h1>Rudi Kraeher</h1>
                </Col>
            </Row>

            <ProfilePic />

            <Row className="heading container">
                <Col md={12}>
                    <h2>Full Stack Web Developer</h2>
                    <h3>HTML/CSS | JavaScript | React | Node</h3>
                </Col>
            </Row>

            {/* Put my contact font awesome icons down here */}
        </div >
    )
}
export default Home;