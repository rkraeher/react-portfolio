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
                    <div className="icons">
                        <i className="fab fa-github fa-3x" style={{ margin: "1vw" }}></i>
                        <i className="fab fa-linkedin fa-3x" style={{ margin: "1vw" }}></i>
                        <i className="fas fa-envelope fa-3x" style={{ margin: "1vw" }}></i>
                    </div>
                </Col>
                <ProfilePic />
            </Row>
        </div >
    )
}
export default Home;