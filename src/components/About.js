import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills'


class About extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                            alt="avatar"
                            style={{height:'200px'}}
                        />
                        </div>
                        <h2 style={{paddingTop:'2em'}}> Laura Pognante</h2>
                        <h4 style={{color:'grey'}}>Estudiante avanzada de Ingeniería de Sistemas</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Soy una persona responsable, comprometida, con gran capacidad de trabajo en equipo. 
                        Con iniciativa de resolver problemas y lograr metas. 
                        Con muchas ganas de trabajar y aprender.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Dirección</h5>
                        <p>Av. Pueyrredon 76, Nueva Córdoba, Argentina</p>
                        <h5>Phone</h5>
                        <p>03468-15560635</p>
                        <h5>Email</h5>
                        <p>lalipognante@gmail.com</p>
                        <h5>Web</h5>
                        <Link>https://portfoliolaura.herokuapp.com</Link>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>


                    <Cell className="about-rigth-col" col={8}>
                        <h2>Educación</h2>
                        <Education 
                            startYear={2009}
                            endYear={2014}
                            schoolDescription="Bachiller con orientación en Economía y Administración"
                            schoolName="INSTITUTO SAGRADO CORAZON DE MONTE MAIZ"
                            tip1=" • Promedio General:  7.68"
                        />
                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolDescription="Estudiante 5to año de Ingeniería de Sistemas"
                            schoolName="UNIVERSIDAD CATOLICA DE CORDOBA - FACULTAD DE INGENIERIA"
                            // schoolName="Universidad Católica de Córdoba -Facultad de Ingeniería"
                            tip1=" • Promedio General:  7.96"
                            tip2=" • Materias aprobadas: 42/57"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experiencia Laboral</h2>
                        <Experience
                            startYear={2014}
                            jobDescription="Pasante en Gestión Empresarial"
                            jobName="SUPERMERCADO MAURINO HNOS"
                            tip1=" • Monte Maíz, Córdoba, Argentina"


                        />
                        <Experience
                            startYear={2019}
                            jobDescription="Business Analyst"
                            jobName="BINAMP SOFTWARE FACTORY"
                            tip1=" • José Roque Funes 1723, Córdoba, Argentina"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Formación Complemetaria</h2>
                        <p>• Curso de capacitación: Test Automation (2017) </p>
                        <p>• Seminario: La Industria del Petróleo (2019)</p>
                        <p>• Seminario Front-End: Universidad Católica de Córdoba (2019)</p>

                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Idiomas</h2>
                        <p>• Ingles intermedio nivel 2 adultos - 2018 (British School Córdoba) </p>
                        <p>• Ingles intermedio nivel 3 adultos - 2019 (British School Córdoba)</p>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default About;