import React from 'react';
import './LandingPage.css';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
  return (
    <div className="landing">
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src="Images/avatar.png" alt="Avatar" className="avatar-img" />

          <div className="banner-text">
            <h1>Software Developer</h1>
            <hr />

            <p>
              Java | JavaScript | AWS | React | HTML/CSS | NodeJS | Express |
              SQL
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/dhimitris-natsis-51b578180/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/dnatsis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              <a
                href="https://gitlab.com/dnatsis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-git-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
