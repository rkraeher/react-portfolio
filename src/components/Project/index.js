import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Bio from "../Bio";
import Contact from "../Contact";
import Projects from "../PortCards";

function Project() {
    return (
        <div>
            <Switch>
                <Route path="/react-portfolio/" exact component={Home} />
                <Route path="/react-portfolio/bio" exact component={Bio} />
                <Route path="/react-portfolio/projects" exact component={Projects} />
                <Route path="/react-portfolio/contact" exact component={Contact} />
            </Switch>
        </div>
    );
}
export default Project;