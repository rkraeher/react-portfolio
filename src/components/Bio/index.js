import { Row, Col } from "antd";
import "./styles.css";

const styles = {
    link: {
        color: "#284B63",
        fontWeight: "bold"
    },
    skills: {
        fontWeight: "500",
        fontSize: "1.15em",
    }
};

//Todo: Decrease font size and increase margins

function Bio() {
    return (
        <div>
            <Row className="heading container">
                <Col lg={20}>
                    <h1>Developer &middot; Writer &middot; Educator</h1>
                    <div className="bio">
                        <p> I am a Visual Media Scholar turned Full Stack Developer. While writing a doctoral dissertation on experimental
                        American aesthetics I completed a web development certificate at the University of California, Riverside.
                        I’m a creative problem solver, rabid mat&eacute; drinker, and undeterred bug sleuth.
                        </p>

                        <p>
                            My dissertation project, "Smoke and Mirrors: Queer of Color Aesthetics from the Harlem Renaissance
                            to the Present" intervenes in discourses of aesthetic form and embodied difference.
                            My writing on contemporary art has been published in
                            <a href="https://www.kcet.org/shows/artbound/soldadera-memory-machine"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}> KCET's Artbound
                            </a> and in the catalogue for the landmark 2017, Pacific Standard Time art exhibition,
                            <a href="https://www.artbook.com/9780982304686.html"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}> Mundos Alternos: Art and Science Fiction in the Americas.
                            </a>
                        </p>
                        <p>
                            I enjoy building things that people find helpful and interesting. I grew up in a family
                            that built small businesses from scratch, so I can appreciate the entrepreneurial spirit
                            and the importance of self-motivation, especially in approaching complex, long-term projects.
                         </p>
                        <hr></hr>
                        <p style={styles.skills}>
                            Technical Skills - React, JavaScript, HTML, CSS, MERN Stack, Node, Express, MongoDB, MySQL.
                        </p>
                    </div>

                </Col>
            </Row>
        </div >
    );
}
export default Bio;