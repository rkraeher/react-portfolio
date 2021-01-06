import { Row, Col, Image } from "antd";
import profile from "../../assets/images/profile.jpg";

function ProfilePic() {
    return (
        <div>
            <Row className="heading container" type="flex" style={{ justifyContent: "center" }}>
                <Col md={6.5}>
                    <Image
                        src={profile}
                        alt="headshot photograph"
                        className="pic"
                        preview={false}
                    />
                </Col>
            </Row>
        </div>
    );
}
export default ProfilePic;