import "./App.less";
import PortfolioLayout from "./components/PortfolioLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <PortfolioLayout />
      </Router>
    </div>
  );
}

export default App;
