import { Row, Col } from "antd";
import "../Project/Project.css";

function Bio() {
    return (
        <div>

            <Row className="heading container">
                <Col lg={20}>
                    <h1>Developer &middot; Writer &middot; Educator</h1>
                    <div className="bio">
                        <p> I am a Full Stack Web Developer specializing in React with a background in media and cultural studies.
                        I create modern web applications for logistics, education, scholarly research, and customer relationship management.
                        </p>

                        <p>
                            I'm currently completing a PhD in English at the University of California, Riverside. My
                            dissertation project, "Smoke and Mirrors: Queer of Color Aesthetics from the Harlem Renaissance
                            to the Present" is an analysis of experimental American artists intervening in discourses of aesthetic form and
                            embodied difference. </p>

                        <p>My writing on contemporary art has been published on
                            <a href="https://www.kcet.org/shows/artbound/soldadera-memory-machine"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "black", fontWeight: "bold" }}> KCET's Artbound
                            </a> and in the catalogue for the landmark 2017 art exhibition,
                            <a href="https://www.artbook.com/9780982304686.html"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "black", fontWeight: "bold" }}> Mundos Alternos.
                            </a>
                        </p>
                        <p>
                            My experience in teaching and research has served me well as a developer,
                            especially when learning new skills and technologies.
                         </p>
                    </div>
                </Col>
            </Row>
        </div >
    );
}
export default Bio;