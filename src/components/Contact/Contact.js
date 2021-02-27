import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Dhimitris Natsis</h2>
          <img
            src="https://i.ibb.co/8PvWjFY/avatar.png"
            alt="Avatar"
            style={{ height: '250px' }}
          />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            My name is Dhimitris Natsis and im a Software Developer specializing
            in Java, Javascript, and AWS. I have a bachelors in Computer Science
            with a concentration in Software Developement from Worcester State
            University. I have experience working with AWS and SQL Databases,
            and I have earned an AWS Certified Solutions Architect Associate in
            July of 2020. Please take a look at some of my projects to see if i
            would be good fit for your company.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: '25px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (774) 437-1875
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: '25px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  dnatsis@worcester.edu
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: '25px', fontFamily: 'Anton' }}
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                  <a href="https://www.linkedin.com/in/dhimitris-natsis-51b578180/">
                    LinkedIn
                  </a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
