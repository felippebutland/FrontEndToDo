import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/footer"
import { StaticRouter as Router, Switch, Route} from "react-router-dom"

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