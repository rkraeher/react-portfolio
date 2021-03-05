import { slide as SideMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import NavSideItems from "./NavSideItems";
import { IoDocumentText } from "react-icons/io5";
import "./styles.css";
import "../PortfolioLayout/styles.css";

//Todo: Fix the bad practice span work around

function NavSide() {
    return (
        <div>
            <SideMenu right>
                {
                    NavSideItems.map(item => (
                        <Link to={item.route} key={item.id} id={item.id} className="menu-item" style={{ color: "white" }}>
                            {item.icon}<span style={{ color: "transparent" }}>""</span>{item.name}
                        </Link>

                    ))
                }
                <Link to={{ pathname: "https://docs.google.com/document/d/1af2P9HLaxX5_a9ufTnxN1ftak5tZQeSC_sA8KiKcw_4/edit?usp=sharings" }}
                    target="_blank"
                    className="menu-item"
                    style={{ color: "white" }}>
                    <IoDocumentText /><span style={{ color: "transparent" }}>""</span>Resume
                </Link>
            </SideMenu>
        </div >
    );
}
export default NavSide;
