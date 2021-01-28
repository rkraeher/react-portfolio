import React from 'react';
import 'antd/dist/antd.css';
import './PortCards.css';
import directory from "../../assets/images/directory.jpg";
import binder from "../../assets/images/binder-stock.jpg";
import socal from "../../assets/images/socal.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import { Card } from 'antd';

function PortCards() {
    const { Meta } = Card;

    return (
        <div className="card-container">
            <div className="card-left">
                {/* Everything inside the a should be a component, with props. First, fix card size issue. */}
                <a target="blank_" href="https://lit-wildwood-97501.herokuapp.com">
                    <Card
                        hoverable
                        className="cards"
                        cover={<img alt="binder app" style={{ height: 360 }} src={binder} />}
                    >
                        <h1>Bindrr</h1>
                        <Meta className="card-desc" style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
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
                        className="cards"
                        cover={<img alt="warehouse" style={{ height: 360 }} src={warehouse} />}
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
                        style={{ flexBasis: "auto", maxWidth: "22em", minHeight: "27em", margin: "1em", fontSize: "2em", textAlign: "center" }}
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
                        className=""
                        style={{ flexBasis: "auto", maxWidth: "22em", minHeight: "27em", margin: "1em", fontSize: "2em", textAlign: "center" }}
                        cover={<img alt="suggest socal" style={{ height: 360 }} src={socal} />}
                    >
                        <h1>Suggest Socal</h1>
                        <Meta style={{ margin: 2, textAlign: "center", fontSize: "1em" }}
                            description="Tourism website for Southern California." />

                        <a target="blank_" href="https://github.com/rkraeher/SuggestSoCal">
                            <i className="fab fa-github fa-4x" style={{ margin: "1vw" }}></i>
                        </a>
                    </Card>
                </a>
            </div>
        </div >
    );
}
export default PortCards;