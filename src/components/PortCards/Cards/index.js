import "antd/dist/antd.css";
import "../styles.css";
import { Card } from 'antd';

function Cards({ wrapperClass, deployedUrl, botCard, img, alt, description, githubUrl, title }) {
    const { Meta } = Card;
    const styles = {
        img: {
            height: 360
        },
        topCards: {
            flexBasis: "auto", maxWidth: "22em",
            minHeight: "23em", marginTop: "3em",
            fontSize: "2em", textAlign: "center"
        },
        botCards: {
            marginBottom: "3em",
        }
    }
    return (
        <div className={wrapperClass}>
            <a target="blank_" href={deployedUrl}>
                <Card
                    hoverable
                    className="cards"
                    style={botCard ? { ...styles.topCards, ...styles.botCards } : { ...styles.topCards }}
                    cover={<img alt={alt} style={styles.img} src={img} />}
                >
                    <h1>{title}</h1>
                    <Meta className="card-desc"
                        description={description} />
                    <a target="blank_" href={githubUrl}>
                        <br></br>
                        <i className="fab fa-github fa-4x"></i>
                    </a>
                </Card>
            </a>
        </div>
    );
}
export default Cards;