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
                <Link to={{ pathname: "https://drive.google.com/file/d/1fExRHP5TUE8raNq0foWv_sCt2Gy7CG6k/view?usp=sharing" }}
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
