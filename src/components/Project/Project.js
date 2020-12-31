import { Row, Col, Image } from "antd";
import profile from "../../assets/images/profile.jpg";

function Project() {
    return (
        <Row>
            <Col md={12}>
                <Image
                    src={profile}
                    alt="headshot photograph"
                />
            </Col>
        </Row>
    );
}

export default Project;