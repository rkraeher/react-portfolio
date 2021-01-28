import React from "react"
import directory from "../../assets/images/directory.jpg";
import binder from "../../assets/images/binder-stock.jpg";
import socal from "../../assets/images/socal.jpg";
import warehouse from "../../assets/images/warehouse.jpg";
import Cards from "./Cards";
import "antd/dist/antd.css";
import "./styles.css";

//TODO: Abstract the card data into an imported object and map into Cards components
//Media query for 2 col vs 1 col marginBot states https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react

function PortCards() {

    return (
        <div className="card-container">
            <Cards
                wrapperClass="card-left"
                deployedUrl="https://lit-wildwood-97501.herokuapp.com"
                botCard={false}
                img={binder}
                alt="binder app"
                description="CRM app to track rental leads. Built with Express and Sequelize."
                githubUrl="https://github.com/rkraeher/bindrr"
                title="Bindrr"
            />
            <Cards
                wrapperClass="card-right"
                deployedUrl="https://inhouse-tracker.herokuapp.com/"
                botCard={false}
                img={warehouse}
                alt="warehouse"
                description="Warehouse inventory tracking system. MERN Stack Application."
                githubUrl="https://github.com/Nolanws1/inHouse"
                title="inHouse"
            />
            <Cards
                wrapperClass="card-bleft"
                deployedUrl="https://rkraeher.github.io/employee-directory-react"
                botCard={true}
                img={directory}
                alt="directory app"
                description="Sortable directory built with React and Bootstrap."
                githubUrl="https://github.com/rkraeher/employee-directory-react"
                title="Easy Directory"
            />
            <Cards
                wrapperClass="card-bright"
                deployedUrl="https://rkraeher.github.io/SuggestSoCal"
                botCard={true}
                img={socal}
                alt="suggest socal"
                description="Traveler recommendation site for Southern California."
                githubUrl="https://github.com/rkraeher/SuggestSoCal"
                title="Suggest Socal"
            />
        </div >
    );
}
export default PortCards;