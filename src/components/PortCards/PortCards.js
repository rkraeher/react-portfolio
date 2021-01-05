import React from 'react';
import 'antd/dist/antd.css';
import './PortCards.css';
import { Card, Col, Row } from 'antd';

function PortCards() {
    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
            </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
            </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
            </Card>
                    </Col>
                </Row>

            </div>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    );
}
export default PortCards;