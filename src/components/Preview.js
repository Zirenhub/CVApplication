const Preview = () => {
  return (
    <div className="cv-preview-container">
      <div className="name-container">
        <div className="first-last-container">
          <p>Erdinch</p>
          <p>Osman</p>
        </div>
        <div>
          <p>Web developer</p>
        </div>
      </div>
      <div className="experience-education-container">
        <div className="description-container">
          <p className="bold-style">Description</p>
          <p>falan filan</p>
        </div>
        <div>
          <p className="bold-style">Experience</p>
          <div className="edu-exp-container">
            <div>
              <div>
                <p>2006&nbsp; - &nbsp;</p>
                <p>2016</p>
              </div>
            </div>
            <div className="edu-exp-details">
              <div>
                <p>web developer</p>
              </div>
              <div>
                <p>google, &nbsp;</p>
                <p>london</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="bold-style">Education</p>
          <div className="edu-exp-container">
            <div>
              <div>
                <p>2006&nbsp; - &nbsp;</p>
                <p>2016</p>
              </div>
            </div>
            <div className="edu-exp-details">
              <div>
                <p>hayat okulu aga, &nbsp;</p>
                <p>kuklen</p>
              </div>
              <div>
                <p>Degree: hayat diplomasi</p>
                <p>Subject: sokak felsefesi</p>
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
        </div>
        <div>
          <p>Phone Number</p>
        </div>
        <div>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
