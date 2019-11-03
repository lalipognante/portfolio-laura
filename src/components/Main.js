import React from 'react';
import landingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Curriculum from './Curriculum';
import Contact from './Contact';




const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/contact" component={Contact} />


    </Switch>
)

export default Main;