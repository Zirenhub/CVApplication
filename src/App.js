import React from 'react';
import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  });
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    mainTasks: '',
    city: '',
    from: '',
    to: '',
  });
  const [education, setEducation] = useState({
    school: '',
    schoolTitle: '',
    schoolCity: '',
    degree: '',
    schoolFrom: '',
    schoolTo: '',
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleChange = (e, component) => {
    const target = e.target.id;
    const value = e.target.value;
    let updatedValue = { [target]: value };

    if (component === 'personalInfo') {
      setPersonalInfo((personalInfo) => ({
        ...personalInfo,
        ...updatedValue,
      }));
    } else if (component === 'experience') {
      setExperience((experience) => ({
        ...experience,
        ...updatedValue,
      }));
    } else {
      setEducation((education) => ({
        ...education,
        ...updatedValue,
      }));
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={onSubmitForm} className="forum">
        <div>
          <Education onChange={handleChange} />
          <Experience onChange={handleChange} />
        </div>
        <div>
          <PersonalInfo onChange={handleChange} />
          <div className="submit-button">
            <button type="submit" id="submitButton">
              Submit form
            </button>
          </div>
        </div>
      </form>
      <div>
        <Preview
          personalInfo={personalInfo}
          experience={experience}
          education={education}
        />
      </div>
    </div>
  );
};

export default App;
