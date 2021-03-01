import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Bio from "../Bio";
import Contact from "../Contact";
import Projects from "../PortCards";
import NotFound from "../NotFound";

function Project() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/bio" exact component={Bio} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
                {/* Test this*/}
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
export default Project;