import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>  
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>  
                    <h4 style={{marginTop:'0px'}}> {this.props.jobDescription} </h4>
                    <p><b>{this.props.jobName}</b></p>
                    <p>{this.props.tip1}</p>
                    <p>{this.props.tip2}</p>
                </Cell>
            </Grid>

        )
    }
}

export default Experience;