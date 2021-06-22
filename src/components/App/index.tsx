import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { StaticRouter as Router, Switch, Route} from "react-router-dom"
import AppPage from "../../../pages/home";
import Grid from "./gridSistemas";

const Home = () => {

    const procurarSistema = () => {

    }

    return (
        <>
        <title>
            Página Inicial
        </title>
        <Router>
            <Navbar /> 
            <div className="sistemas">
                <div className="sistemas-aba">
                <form onSubmit={procurarSistema}>
                    <p className="p">
                        <input className="input-pesquisa" type="text" placeholder="Pesquise por ID do sistema"/>
                        <button className="buttonPesquisa">Pesquisar</button> 
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