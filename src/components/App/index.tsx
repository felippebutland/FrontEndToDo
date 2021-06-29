import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { StaticRouter as Router, Switch, Route} from "react-router-dom"
import AppPage from "../../../pages/home";
import Grid from "./gridSistemas";
import MTable from "./gridSistemas2-0";

const Home = () => {

    return (
        <>
        <title>
            Página Inicial
        </title>
        <Router>
            <Navbar /> 
            <div className="sistemas">
                <MTable />
            </div>
            <Footer />
            
            <Switch>
                <Route path='/home' exact component={AppPage}/>
            </Switch>
            
        </Router>            
        </>
    );
}

export default Home;