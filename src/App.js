import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {},
      experience: {},
      education: {},
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.personalInfo);
    console.log(this.state.experience);
    console.log(this.state.education);
  };

  render() {
    const { personalInfo, experience, education } = this.state;
    return (
      <div className="main-container">
        <form onSubmit={this.onSubmitForm} className="forum">
          <PersonalInfo database={personalInfo} />
          <Experience database={experience} />
          <Education database={education} />
        </form>
      </div>
    );
  }
}

export default App;
