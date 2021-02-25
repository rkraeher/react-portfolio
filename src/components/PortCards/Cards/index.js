import "antd/dist/antd.css";
import "../styles.css";
import { Card } from "antd";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";

function Cards({ wrapperClass, deployedUrl, img, alt, description, githubUrl, title }) {
    const { Meta } = Card;
    const styles = {
        img: {
            height: 360
        },
        cards: {
            flexBasis: "auto", maxWidth: "22em",
            minHeight: "15em", margin: "2em",
            fontSize: "2em", textAlign: "center"
        }
    }
    return (
        <div className={wrapperClass}>
            <Card
                hoverable
                className="cards"
                style={styles.cards}
                cover={<img alt={alt} className="img" style={styles.img} src={img} />}
            >
                <h1>{title}</h1>
                <Meta className="card-desc"
                    description={description} />
                <a target="_blank" rel="noreferrer" href={githubUrl}>
                    <FaGithubSquare className="project-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href={deployedUrl}>
                    <FiExternalLink className="project-icon" />
                </a>

            </Card>

        </div>
    );
}
export default Cards;