import React from 'react';
import 'antd/dist/antd.css';
import './PortCards.css';
import directory from "../../assets/images/directory.jpg";
import binder from "../../assets/images/binder-stock.jpg";
import socal from "../../assets/images/socal.jpg";
import workout from "../../assets/images/workout.jpg";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

function PortCards() {
    return (
        <div style={{ backgroundColor: "#ececec" }}>
            <Row gutter={16} className="container" >
                <Col lg={9}>
                    <a target="blank_" href="https://rkraeher.github.io/employee-directory-react">
                        <Card
                            hoverable
                            style={{ width: "30vw", minHeight: "20vh", margin: 50, fontSize: "1.5vw", textAlign: "center" }}
                            cover={<img alt="directory app" src={directory} />}
                        >
                            <h1>Employee Directory</h1>
                            <Meta style={{ margin: 2, textAlign: "center", fontSize: "1.5vw" }}
                                description="Sortable employee directory built with React." />

                            <p style={{ textAlign: "center" }}>Put Github Icon Here in Middle</p>

                        </Card>
                    </a>
                </Col>
                <Col lg={9}>
                    <a target="blank_" href="https://lit-wildwood-97501.herokuapp.com">
                        <Card
                            hoverable
                            style={{ width: "30vw", minHeight: "20vh", margin: 50, fontSize: "1.5vw", textAlign: "center" }}
                            cover={<img alt="binder app" src={binder} />}
                        >
                            <h1>Binder Lead Management</h1>
                            <Meta style={{ margin: 2, textAlign: "center", fontSize: "1.5vw" }}

                                description="CRM app for tracking rental leads. Built with Express and Sequelize." />

                            <p style={{ textAlign: "center" }}>Put Github Icon Here in Middle</p>
                        </Card>
                    </a>
                </Col>
            </Row>

            <Row gutter={16} className="container" >
                <Col lg={9}>
                    <a target="blank_" href="https://rkraeher.github.io/SuggestSoCal">
                        <Card
                            hoverable
                            style={{ width: "30vw", minHeight: "20vh", margin: 50, fontSize: "1.5vw", textAlign: "center" }}
                            cover={<img alt="suggest socal" src={socal} />}
                        >
                            <h1>Suggest Socal</h1>
                            <Meta style={{ margin: 2, textAlign: "center", fontSize: "1.5vw" }}
                                description="Tourism and hospitality website for visitors to Southern California." />

                            <p style={{ textAlign: "center" }}>Put Github Icon Here in Middle</p>
                        </Card>
                    </a>
                </Col>
                <Col lg={9}>
                    <a target="blank_" href="https://workout-tracker-20-v1.herokuapp.com">
                        <Card
                            hoverable
                            style={{ width: "30vw", minHeight: "20vh", margin: 50, fontSize: "1.5vw", textAlign: "center" }}
                            cover={<img alt="workout tracker" src={workout} />}
                        >
                            <h1>Workout Tracker</h1>
                            <Meta style={{ margin: 2, textAlign: "center", fontSize: "1.5vw" }}

                                description="Web app for tracking your workouts. Built with Express and Mongoose." />

                            <p style={{ textAlign: "center" }}>Put Github Icon Here in Middle</p>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div >
    );
}
export default PortCards;