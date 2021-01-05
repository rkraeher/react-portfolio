import React from 'react';
import 'antd/dist/antd.css';
import './PortCards.css';
import directory from "../../assets/images/directory.jpg";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

function PortCards() {
    return (
        <div style={{ backgroundColor: "#ececec" }}>
            <Row gutter={16} className="container" >
                <Col lg={9} offset={1}>
                    <Card
                        hoverable
                        style={{ width: "25vw", margin: 50 }}
                        cover={<img alt="directory app" src={directory} />}
                    >
                        <Meta style={{ margin: 20, textAlign: "center" }} title="Employee Directory" description="A sortable employee directory built with React." />

                        <p style={{ margin: 20, textAlign: "center" }}>Put Github Icon Here in Middle</p>

                    </Card>
                </Col>
                <Col lg={9}>
                    <Card
                        hoverable
                        style={{ width: "25vw", margin: 50 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16} className="container" >
                <Col lg={9} offset={1}>
                    <Card
                        hoverable
                        style={{ width: "25vw", margin: 50 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col lg={9}>
                    <Card
                        hoverable
                        style={{ width: "25vw", margin: 50 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div >
    );
}
export default PortCards;