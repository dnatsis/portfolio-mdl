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
                <a
                  href="https://github.com/dnatsis/portfolio-mdl"
                  target="blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover',
              }}
            >
              MERN Stack Todo-List
            </CardTitle>
            <CardText>
              Todo-List application built using MERN and Bootstrap
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/dnatsis/mern-todo" target="blank">
                  GitHub
                </a>
              </Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover',
              }}
            >
              MERN Stack Todo-List Backend
            </CardTitle>
            <CardText>Todo-List application backend</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/dnatsis/mern-todo-backend"
                  target="blank"
                >
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://images.ctfassets.net/cj4mgtttlyx7/2bMQABwpxQY6cz2CeCX7Z4/22e76d4c8f964458a87cc62fca543ce4/most-popular-java-web-frameworks.jpg?w=668&q=50) center / cover',
              }}
            >
              Movie Library
            </CardTitle>
            <CardText>Movie Library backend using Java</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://gitlab.com/dnatsis/MovieLibrary"
                  target="blank"
                >
                  GitLab
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://images.ctfassets.net/cj4mgtttlyx7/2bMQABwpxQY6cz2CeCX7Z4/22e76d4c8f964458a87cc62fca543ce4/most-popular-java-web-frameworks.jpg?w=668&q=50) center / cover',
              }}
            >
              Pizza Store
            </CardTitle>
            <CardText>Pizza Store backend using Java</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://gitlab.com/dnatsis/PizzaStore" target="blank">
                  GitLab
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <br></br>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://images.ctfassets.net/cj4mgtttlyx7/2bMQABwpxQY6cz2CeCX7Z4/22e76d4c8f964458a87cc62fca543ce4/most-popular-java-web-frameworks.jpg?w=668&q=50) center / cover',
              }}
            >
              Word Frequency Analyzer
            </CardTitle>
            <CardText>Word Frequency Analyzer backend using Java</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://gitlab.com/dnatsis/Word_Frequency_Analyzer"
                  target="blank"
                >
                  GitLab
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1) center / cover',
              }}
            >
              Android Weather App
            </CardTitle>
            <CardText>Android Weather App Using DarkSky API</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://gitlab.com/dnatsis/localweather"
                  target="blank"
                >
                  GitLab
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '175px',
                background:
                  'url(https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1) center / cover',
              }}
            >
              Android Stoic Quotes App
            </CardTitle>
            <CardText>
              Android Quotes App that returns a random stoic quote
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://gitlab.com/dnatsis/stoicquotes" target="blank">
                  GitLab
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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
          <Tab>Android Studio</Tab>
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
