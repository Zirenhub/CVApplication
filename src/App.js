import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.onSubmitForm} className="forum">
          <PersonalInfo />
          <Experience />
          <Education />
        </form>
      </div>
    );
  }
}

export default App;
