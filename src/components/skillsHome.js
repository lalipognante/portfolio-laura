import React, {Component } from 'react';
import {Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';
import Skills from './Skills'


class skillsHome extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Habilidades</h2>
                    <h6>• Conocimiento y manejo de Metodologías Agiles</h6>
                    <h6>• Conocimiento y manejo de Ingeniería de Requerimientos</h6>
                    <h6>• Conocimiento y manejo de Base de datos Relacionales</h6>
                    <h6>• Conocimiento y manejo de Base de datos No Relacionales</h6>
                    </Cell>

                    <Cell col={6}>
                        <h2>Tecnologías</h2>
                        <Skills
                            skill="Angular"
                            progress={100}
                        />
                        <Skills
                            skill="Git"
                            progress={100}
                        />
                        <Skills
                            skill="Firebase"
                            progress={80}
                        />
                         <Skills
                            skill="HTML"
                            progress={100}
                        />
                        <Skills
                            skill="SCSS"
                            progress={100}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}

                        />
                        <Skills
                            skill="React"
                            progress={30}
                        />
                        <Skills
                            skill="Python"
                            progress={50}
                        />
                    </Cell>


                </Grid>
            </div>
        )
    }
}

export default skillsHome;