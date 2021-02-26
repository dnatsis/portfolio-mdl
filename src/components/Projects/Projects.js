import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from 'react-mdl';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover',
              }}
            >
              React Portfolio
            </CardTitle>
            <CardText>
              This is the Portfolio I built using React and MDL
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/dnatsis/portfolio-mdl">GitHub</a>
              </Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Java Section</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is AWS Section</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Database Section</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="tab-category">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>Java</Tab>
          <Tab>AWS</Tab>
          <Tab>Databases</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
