import React, {Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton}  from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){

        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px', background:
                    'url(https://anthoncode.com/wp-content/uploads/2019/01/angular-logo-png.png) center / cover'}}> Angular Project #1</CardTitle>
                    <CardText>
                        This is my angular projects i love it
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px', background:
                    'url(https://anthoncode.com/wp-content/uploads/2019/01/angular-logo-png.png) center / cover'}}> Angular Project #2</CardTitle>
                    <CardText>
                        This is my angular projects i love it
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px', background:
                    'url(https://anthoncode.com/wp-content/uploads/2019/01/angular-logo-png.png) center / cover'}}> Angular Project #3</CardTitle>
                    <CardText>
                        This is my angular projects i love it
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px', background:
                    'url(https://venturebeat.com/wp-content/uploads/2019/09/google-firebase.png?w=1200&strip=all) center / cover'}}> Firebase Project #1</CardTitle>
                    <CardText>
                        This is my firebase projects i love it
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if (this.state.activeTab === 2){
                return(
                    <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px', background:
                        'url(http://www.danielledeveloper.com/wp-content/uploads/2018/04/Reactjs-logo-e1523253944211.png) center / cover'}}> React Project #1</CardTitle>
                        <CardText>
                            This is my react projects i love it
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    </div>
                )
         }
    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({activeTab: tabId})} ripple>
                    <Tab>Angular</Tab>
                    <Tab>Firebase</Tab>
                    <Tab>React</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>

                    </Grid>
            </div>
        )
    }
}

export default Projects;