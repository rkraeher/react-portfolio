import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 style={{ justifyContent: "center", display: "flex", fontSize: "4em" }}>404 - Page Not Found!</h1>
            <Link to="/" style={{ justifyContent: "center", display: "flex", fontSize: "2em" }} >
                Go Home
            </Link>
        </div>
    )
};

export default NotFound;