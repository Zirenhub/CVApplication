import React from 'react';
// import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: 0,
        email: '',
        description: '',
      },
      experience: {
        position: '',
        company: '',
        mainTasks: '',
        city: '',
        from: '',
        to: '',
      },
      education: {
        school: '',
        schoolTitle: '',
        schoolCity: '',
        degree: '',
        schoolFrom: '',
        schoolTo: '',
      },
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e, component) => {
    const target = e.target.id;
    const value = e.target.value;

    if (component === 'personalInfo') {
      this.setState((prevState) => {
        let personalInfo = Object.assign({}, prevState.personalInfo);
        personalInfo[target] = value;
        return { personalInfo };
      });
    } else if (component === 'experience') {
      this.setState((prevState) => {
        let experience = Object.assign({}, prevState.experience);
        experience[target] = value;
        return { experience };
      });
    } else {
      this.setState((prevState) => {
        let education = Object.assign({}, prevState.education);
        education[target] = value;
        return { education };
      });
    }
  };

  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.onSubmitForm} className="forum">
          <PersonalInfo onChange={this.handleChange} />
          <Experience onChange={this.handleChange} />
          <Education onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default App;
