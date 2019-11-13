import React, {Component } from 'react';
import {Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Laura Pognante</h2>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                            alt="avatar"
                            style={{height:'250px'}}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                        Soy una persona responsable, comprometida, con gran capacidad de trabajo en equipo. Con iniciativa de resolver problemas y lograr metas. Con muchas ganas de trabajar y aprender.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Datos Personales</h2>
                        <hr/>
                        <div className="contact-list"> 
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square " aria-hidden="true"/>
                                    (03468) 15560635
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope " aria-hidden="true"/>
                                    lalipognante@gmail.com
                                    </ListItemContent>    
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-map-pin " aria-hidden="true"/>
                                    Córdoba, Argentina
                                    </ListItemContent>    
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-calendar " aria-hidden="true"/>
                                    12/05/1997
                                    </ListItemContent>    
                                </ListItem>
                            </List>
                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}

export default Contact;