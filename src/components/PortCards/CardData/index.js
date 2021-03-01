import directory from "../../../assets/images/directory.jpg";
import binder from "../../../assets/images/binder-stock.jpg";
import socal from "../../../assets/images/socal.jpg";
import warehouse from "../../../assets/images/warehouse.jpg";

//I can't map this data until I've figured out the wrapperClass issue

const CardData = [
    {
        wrapperClass: "card-bright",
        deployedUrl: "https://lit-wildwood-97501.herokuapp.com",
        img: { binder },
        alt: "for rent sign",
        description: "CRM app to track rental leads. Built with Express and Sequelize.",
        githubUrl: "https://github.com/rkraeher/bindrr",
        title="Bindrr"
    },
    {
        wrapperClass: "card-left",
        deployedUrl: "https://inhouse-tracker.herokuapp.com/",
        img: { warehouse },
        alt: "warehouse picture",
        description: "Warehouse inventory tracking system. MERN Stack Application.",
        githubUrl: "https://github.com/Nolanws1/inHouse",
        title="inHouse"
    },
    {
        wrapperClass: "card-bleft",
        deployedUrl: "https://rkraeher.github.io/employee-directory-react",
        img: { directory },
        alt: "directory picture",
        description: "Sortable directory built with React and Bootstrap.",
        githubUrl: "https://github.com/rkraeher/employee-directory-react",
        title="Easy Directory"
    },
    {
        wrapperClass: "card-right",
        deployedUrl: "https://rkraeher.github.io/SuggestSoCal",
        img: { socal },
        alt: "socal landscape with trees and ocean",
        description: "Traveler recommendation site for Southern California.",
        githubUrl: "https://github.com/rkraeher/SuggestSoCal",
        title="Suggest Socal"
    },
]
export default CardData;