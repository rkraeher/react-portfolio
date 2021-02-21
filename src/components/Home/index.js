import "./styles.css";
import ProfilePic from "../ProfilePic";

const styles = {
    margin: "1vw"
}

const Home = () => {
    return (
        <div className="home-container">
            <div className="text">
                <h1 id="name">
                    Rudi Kraeher
                <br></br>
                    Full Stack Web Developer
                </h1>

                <h3 id="languages">HTML/CSS &middot; JavaScript &middot; React &middot; Node</h3>


                <div className="icons">
                    <a target="blank_" href="https://www.linkedin.com/in/rudi-kraeher">
                        <i className="fab fa-linkedin fa-3x" style={styles}></i>
                    </a>
                    <a target="blank_" href="https://github.com/rkraeher">
                        <i className="fab fa-github fa-3x" style={styles}></i>
                    </a>
                    {/*//TODO: Should switch current view to Contact page */}
                    <a href="/contact">
                        <i className="fas fa-envelope fa-3x" style={styles}></i>
                    </a>
                </div>
            </div>
            <div className="image">
                <ProfilePic />
            </div>
        </div >
    )
}
export default Home;