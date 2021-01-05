import { Row, Col } from "antd";
import ProfilePic from "../ProfilePic/ProfilePic";
import "../Project/Project.css";

function Bio() {
    return (
        <div>
            <ProfilePic />

            <Row className="heading container">
                <Col md={12}>
                    <h1>Developer | Writer | Educator</h1>

                    <div className="bio">
                        <p> Rudi (he/him) is a Full Stack Web Developer specializing in React with a background in media research and higher education.
    </p>
                        <p>
                            Rudi is currently completing a PhD in English from the University of California, Riverside. His
                            dissertation project, "Smoke and Mirrors: Queer of Color Aesthetics from the Harlem Renaissance
                            to the Present" is an analysis of experimental American artists intervening in discourses of aesthetic form and
                            embodied difference. His writing on contemporary art has been published on
            <a href="https://www.kcet.org/shows/artbound/soldadera-memory-machine"
                                target="_blank"
                                rel="noreferrer"> KCET's Artbound
            </a> and in the catalogue for the landmark 2017 art exhibition,
            <a href="https://www.artbook.com/9780982304686.html"
                                target="_blank"
                                rel="noreferrer"> Mundos Alternos.
                 </a>
                        </p>
                        <p>
                            Rudi teaches university classes on film, art, and American literature. Rudi's pedagogy foregrounds
                            the role of desire and pleasure in his analysis of creative cultural production. Rudi's training and
                            experience in education, research, and arts writing enables him to offer criticality and conceptual
                            thinking in working with clients on modern web applications.
                </p>
                    </div>

                </Col>
            </Row>
        </div>
    );
}
export default Bio;