import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content, Header } from 'react-mdl';
import Main from "./components/Main";
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skillsHome">Skills</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/curriculum">Curriculum</Link> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'grey'}} to="/">Portfolio</Link>} >
            <Navigation>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skillsHome">Skills</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/curriculum">Curriculum</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

    </Layout>
</div>
  );
}
}

export default App;
