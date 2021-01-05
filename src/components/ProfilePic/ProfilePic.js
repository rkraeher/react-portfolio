import { Row, Col, Image } from "antd";
import profile from "../../assets/images/profile.jpg";

function ProfilePic() {
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
        </div>
    );
}
export default ProfilePic;