import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Curriculum from './Curriculum';
import Contact from './Contact';
import Projects from './Projects';
import SkillsHome from './SkillsHome'




const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/SkillsHome" component={SkillsHome} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
)

export default Main;