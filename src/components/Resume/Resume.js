import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Resume.css';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

function Resume() {
  return (
    <div>
      <Grid>
        <Cell className="resume-left-col" col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              className="avatar-image"
              src="Images/avatar.png"
              alt="avatar"
            />
          </div>

          <h2 style={{ paddingTop: '2em' }}>Dhimitris Natsis</h2>
          <h4 style={{ color: 'grey' }}>Software Developer</h4>
          <hr style={{ borderTop: '3px solid #134e5e', width: '50%' }} />
          <p>
            Passionate Software Developer with experience in AWS and Azure Cloud
            technologies. AWS Certified Solutions Architect Associate (SAA-C02).
            Pay great attention to the SDLC, know for meeting deadlines in a
            fast paced environment. Self motivated with a great emphasis on
            requirement gathering, design and testing, documentation, and
            quality assurance. Motivated team player with excellent
            collaboration skills. Life long love of technology and learning
            about new advancements in the field of both Software, and IT.
          </p>
          <hr style={{ borderTop: '3px solid #134e5e', width: '50%' }} />
          <h5>Location</h5>
          <p>Greater Boston Area</p>
          <h5>Phone</h5>
          <p>(774) 437-1875</p>
          <h5>Email</h5>
          <p>dnatsis@worcester.edu</p>
          <hr style={{ borderTop: '3px solid #134e5e', width: '50%' }} />
          <h5>Languages</h5>
          <p> English</p>
          <p>Greek</p>
          <h5>Hobbies</h5>
          <p>Playing and performing music, Cooking, Exercising, Golf</p>
          <hr style={{ borderTop: '3px solid #134e5e', width: '50%' }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education
            startYear={2014}
            endYear={2018}
            schoolName="Worcester State University"
            schoolDescription="Computer Science with a Concentration in Software Development"
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />

          <h2>Experience</h2>
          <Experience
            startYear={2020}
            endYear={2020}
            jobName="AWS Data Integration and Migration Intern, University of Massachusetts
            Medical School, Shrewsbury, MA"
            jobDescription="In charge of researching, creating, and presenting a proof of concept for a tool that
            will continuously deploy schema changes to a database. Built a State based tool using
            DACPAC for continuously automating schema changes to a database using Azure
            DevOps. Built a Migration based tool using Liquibase for continuously automating
            schema changes to a database using Azure DevOps. Created a build and release
            pipeline in Azure DevOps for continuously automating schema changes from the test
            database to the release database. Trained in AWS and Terraform with the goal of
            creating database infrastructure in AWS and Azure. Earned AWS Solutions Architect
            Associate Certification(SAA-C02)."
          />
          <Experience
            startYear={2017}
            endYear={2018}
            jobName="Senior Project | Open MRS - Open Source Contributer"
            jobDescription="Setup local version of Open MRS using Java, Maven, and Gradle as well as
            any dependencies. Learned about the SDLC and test driven development in an
            Open Source collaborative environment. Gained extensive experience writing Java
            Docs and JUnit Tests while collaborating with a diverse staff. Expanded expertise
            concerning system operations and methods/procedures for pushing changes using
            an open source ticketing system."
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>
          <Skills />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
