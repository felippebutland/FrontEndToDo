import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { StaticRouter as Router, Switch, Route} from "react-router-dom"
import AppPage from "../../../pages/home";
import Grid from "./gridSistemas";

const Home = () => {

    return (
        <>
        <title>
            Página Inicial
        </title>
        <Router>
            <Navbar /> 
            <div className="sistemas">
                <div className="sistemas-aba">
                <form action="/" method="get">
                    <p className="p">
                    <input className="input-pesquisa" placeholder="Pesquise por ID do sistema" type="text" id="id_sistema_input"/>
                    <button type="submit" className="buttonPesquisa">Pesquisar</button> 
                    </p>                    
                </form>
                <Grid />
                </div>
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