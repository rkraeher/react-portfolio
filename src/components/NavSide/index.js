import { slide as SideMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import NavSideItems from "./NavSideItems";
import "./styles.css";
import "../PortfolioLayout/styles.css";

//Todo: Fix this for the external "resume" link
//https://stackoverflow.com/questions/42914666/react-router-external-link
//Todo: Add icons?

function NavSide() {
    return (
        <div>
            <SideMenu right>
                {
                    NavSideItems.map(item => (
                        <Link to={item.route} key={item.id} id={item.id} className="menu-item" style={{ color: "white" }}>
                            {item.name}
                        </Link>
                    ))
                }
            </SideMenu>
        </div>
    );
}
export default NavSide;
