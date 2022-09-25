const Preview = ({ personalInfo, experience, education }) => {
  return (
    <div className="cv-preview-container">
      <div className="name-container">
        <div className="first-last-container">
          <p>{personalInfo.firstName}</p>
          <p>{personalInfo.lastName}</p>
        </div>
        <div>
          <p>{personalInfo.title}</p>
        </div>
      </div>
      <div className="experience-education-container">
        <div className="description-container">
          <p className="bold-style">Description</p>
          <p>{personalInfo.description}</p>
        </div>
        <div>
          <p className="bold-style">Experience</p>
          <div className="edu-exp-container">
            <div>
              <div>
                <p>{experience.from}&nbsp; - &nbsp;</p>
                <p>{experience.to}</p>
              </div>
            </div>
            <div className="edu-exp-details">
              <div>
                <p>{experience.company}, &nbsp;</p>
                <p>{experience.city}</p>
              </div>
              <div>
                <p>{experience.position}</p>
              </div>
              <div>
                <p>Main Tasks: {experience.mainTasks}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="bold-style">Education</p>
          <div className="edu-exp-container">
            <div>
              <div>
                <p>{education.schoolFrom}&nbsp; - &nbsp;</p>
                <p>{education.schoolTo}</p>
              </div>
            </div>
            <div className="edu-exp-details">
              <div>
                <p>{education.school}, &nbsp;</p>
                <p>{education.schoolCity}</p>
              </div>
              <div>
                <p>Degree: {education.degree}</p>
                <p>Title of Study: {education.schoolTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-details-container">
        <div>
          <p>Personal Details</p>
        </div>
        <div>
          <p>Address</p>
          <p>{personalInfo.address}</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p>{personalInfo.phoneNumber}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{personalInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
