import React from "react"
import "antd/dist/antd.css";
import "./styles.css";
import directory from "../../assets/images/directory.jpg";
import binder from "../../assets/images/binder-stock.jpg";
import socal from "../../assets/images/socal.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import { Card } from 'antd';


//TODO: Everything inside the a should be a component


function PortCards() {
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
            marginBottom: "3em"
        }
    }

    return (
        <div className="card-container">
            <div className="card-left">
                <a target="blank_" href="https://lit-wildwood-97501.herokuapp.com">
                    <Card
                        hoverable
                        className="cards"
                        style={styles.topCards}
                        cover={<img alt="binder app" style={styles.img} src={binder} />}
                    >
                        <h1>Bindrr</h1>
                        <Meta className="card-desc"
                            description="CRM app to track rental leads. Built with Express and Sequelize." />
                        <a target="blank_" href="https://github.com/rkraeher/bindrr">
                            <br></br>
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-right">
                <a target="blank_" href="https://inhouse-tracker.herokuapp.com/">
                    <Card
                        hoverable
                        className="cards"
                        style={styles.topCards}
                        cover={<img alt="warehouse" style={styles.img} src={warehouse} />}
                    >
                        <h1>inHouse</h1>
                        <Meta className="card-desc"
                            description="Warehouse inventory tracking system. MERN Stack Application." />
                        <a target="blank_" href="https://github.com/Nolanws1/inHouse">
                            <br></br>
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-bleft">
                <a target="blank_" href="https://rkraeher.github.io/employee-directory-react">
                    <Card
                        hoverable
                        className="cards"
                        id="dir-app"
                        style={{ ...styles.topCards, ...styles.botCards }}
                        cover={<img alt="directory app" style={styles.img} src={directory} />}
                    >
                        <h1>Easy Directory</h1>
                        <Meta className="card-desc"
                            description="Sortable directory built with React and Bootstrap." />
                        <a target="blank_" href="https://github.com/rkraeher/employee-directory-react">
                            <br></br>
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-bright">
                <a target="blank_" href="https://rkraeher.github.io/SuggestSoCal">
                    <Card
                        hoverable
                        className="cards"
                        style={{ ...styles.topCards, ...styles.botCards }}
                        cover={<img alt="suggest socal" style={styles.img} src={socal} />}
                    >
                        <h1>Suggest Socal</h1>
                        <Meta className="card-desc"
                            description="Traveler recommendation site for Southern California." />
                        <a target="blank_" href="https://github.com/rkraeher/SuggestSoCal">
                            <br></br>
                            <i className="fab fa-github fa-4x"></i>
                        </a>
                    </Card>
                </a>
            </div>
        </div >
    );
}
export default PortCards;