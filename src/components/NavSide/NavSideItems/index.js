import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPhone, AiFillHome } from "react-icons/ai";

const NavSideItems = [
    {
        route: "/",
        name: "Home",
        id: "home",
        icon: <AiFillHome />
    },
    {
        route: "/about",
        name: "About",
        id: "bio",
        icon: <FaUserAlt />
    },
    {
        route: "/projects",
        name: "Projects",
        id: "projects",
        icon: <BsFillBriefcaseFill />
    },
    {
        route: "/contact",
        name: "Contact",
        id: "contact",
        icon: <AiFillPhone />
    }
]
export default NavSideItems;