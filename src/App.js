import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';

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
          <div>
            <Education onChange={this.handleChange} />
            <Experience onChange={this.handleChange} />
          </div>
          <div>
            <PersonalInfo onChange={this.handleChange} />
            <div className="submit-button">
              <button type="submit" id="submitButton">
                Submit form
              </button>
            </div>
          </div>
        </form>
        <div>
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
