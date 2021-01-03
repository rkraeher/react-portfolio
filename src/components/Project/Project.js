import { Row, Col, Image } from "antd";
import profile from "../../assets/images/profile.jpg";
import "./Project.css";
import Bio from "../Bio/Bio";

function Project() {
    return (
        <div>
            <Row className="container">
                <Col md={12}>
                    <Image
                        src={profile}
                        alt="headshot photograph"
                        className="pic"
                    />
                </Col>
            </Row>
            <Row className="heading container">
                <Col md={12}>
                    <Bio />
                </Col>
            </Row>
        </div>
    );
}

export default Project;