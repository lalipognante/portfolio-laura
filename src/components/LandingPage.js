import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import SkillsHome from './SkillsHome';
import About from './About';
import Projects from './Projects';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
            <Grid className="Landing-grid">

                <Cell col={12}  className="fondo1" style={{width:'100%', margin:'auto'}}>
                <img 
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">
                 <h1>Estudiante Laura Pognante </h1>
                 <hr/>
                  <p>
                    HTML / CSS / Bootstrap / TypeScript / Angular / React / NodeJS / Firebase
                 </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/laura-pognante" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                    </a>

                    <a href="https://github.com/lalipognante" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github"  aria-hidden="true"/>
                    </a>
                </div>
                </div>
                </Cell>


                {/* <Cell col={12} className="fondo2">
                    <About/>
                </Cell> */}

                <Cell col={12}>
                    <Projects/>
                </Cell>

                <Cell col={12} style={{background:'white'}}> 
                    <SkillsHome/>         
                </Cell>
                
                </Grid>

            </div>
        )
    }
}

export default LandingPage;