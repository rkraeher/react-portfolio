import React from 'react';
import 'antd/dist/antd.css';
import './PortCards.css';
import directory from "../../assets/images/directory.jpg";
import binder from "../../assets/images/binder-stock.jpg";
import socal from "../../assets/images/socal.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

//TODO: Need to resize cards with media queries. They have antd styles. 
//https://stackoverflow.com/questions/49541607/how-can-you-make-the-cards-for-ant-design-smaller
//https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=You%20cannot%20set%20media%20queries,and%20then%20import%20the%20stylesheet.&text=css'%20to%20the%20top%20of,a%20specific%20react%20component%20file.
//https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

function PortCards() {
    return (
        <div className="card-container" style={{ backgroundColor: "#ececec" }}>
            <div className="card-left">
                {/* Everything inside the a should be a component, with props. First, fix card size issue. */}
                <a target="blank_" href="https://lit-wildwood-97501.herokuapp.com">
                    <Card
                        hoverable
                        // The width below is what needs to change in media queries
                        style={{ width: "20em", minHeight: "20vh", margin: 50, fontSize: "2em", textAlign: "center" }}
                        cover={<img alt="binder app" style={{ height: 360 }} src={binder} />}
                    >
                        <h1>Bindrr</h1>
                        <Meta style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
                            description="CRM app for tracking rental leads. Built with Express and Sequelize." />

                        <a target="blank_" href="https://github.com/rkraeher/bindrr">
                            <i className="fab fa-github fa-4x" style={{ margin: "1vw" }}></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-right">
                <a target="blank_" href="https://inhouse-tracker.herokuapp.com/">
                    <Card
                        hoverable
                        style={{ width: "20em", minHeight: "20vh", margin: 50, fontSize: "2em", textAlign: "center" }}
                        cover={<img alt="workout tracker" style={{ height: 360 }} src={warehouse} />}
                    >
                        <h1>inHouse</h1>
                        <Meta style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
                            description="Warehouse inventory tracking system. MERN Stack Application." />

                        <a target="blank_" href="https://github.com/Nolanws1/inHouse">
                            <i className="fab fa-github fa-4x" style={{ margin: "1vw" }}></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-bleft">
                <a target="blank_" href="https://rkraeher.github.io/employee-directory-react">
                    <Card
                        hoverable
                        style={{ width: "20em", minHeight: "20vh", margin: 50, fontSize: "2em", textAlign: "center" }}
                        cover={<img alt="directory app" style={{ height: 360 }} src={directory} />}
                    >
                        <h1>Employee Directory</h1>
                        <Meta style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
                            description="Sortable employee directory built with React." />

                        <a target="blank_" href="https://github.com/rkraeher/employee-directory-react">
                            <i className="fab fa-github fa-4x" style={{ margin: "1vw" }}></i>
                        </a>
                    </Card>
                </a>
            </div>
            <div className="card-bright">
                <a target="blank_" href="https://rkraeher.github.io/SuggestSoCal">
                    <Card
                        hoverable
                        style={{
                            width: "20em",
                            minHeight: "20vh", margin: 50, fontSize: "2em", textAlign: "center"
                        }}
                        cover={<img alt="suggest socal" style={{ height: 360 }} src={socal} />}
                    >
                        <h1>Suggest Socal</h1>
                        <Meta style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
                            description="Tourism website for visitors to Southern California." />

                        <a target="blank_" href="https://github.com/rkraeher/SuggestSoCal">
                            <i className="fab fa-github fa-4x" style={{ margin: "1vw" }}></i>
                        </a>
                    </Card>
                </a>
            </div>
        </div>
    );
}
export default PortCards;