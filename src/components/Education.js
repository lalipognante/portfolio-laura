import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>  
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>  
                    <h4 style={{marginTop:'0px'}}> {this.props.schoolDescription} </h4>
                    <p><b>{this.props.schoolName}</b></p>
                    <p>{this.props.tip1}</p>
                    <p>{this.props.tip2}</p>

                </Cell>
            </Grid>

        )
    }
}

export default Education;