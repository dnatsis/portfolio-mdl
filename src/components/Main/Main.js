import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/Aboutme';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

function Main() {
  return (
    <Switch>
      <Route exact path="/portfolio-mdl" component={LandingPage} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
}

export default Main;
