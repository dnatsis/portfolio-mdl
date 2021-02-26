import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <p>
            Java | Javascript | AWS | React | Express | NodeJS | MSSQL | MongoDB
          </p>
          <p>
            Android Studio | Azure DevOPS | C# | OOP | TDD | MVC | Automation |
            HTML/CSS
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
