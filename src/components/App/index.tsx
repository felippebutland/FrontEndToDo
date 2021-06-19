import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { StaticRouter as Router, Switch, Route} from "react-router-dom"
import Comentario from "./components/Comentario/comentario"

const Home = () => {

    return (
        <>
        <Router>
            <Footer />
            <Navbar /> 
            <Switch>
                <Route path='/home'/>
            </Switch>
        </Router>            
        </>
    );
}

export default Home;