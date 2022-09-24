const Experience = (props) => {
  const handleChange = (e) => {
    props.onChange(e, 'experience');
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h1>Experience</h1>
      </div>
      <div className="form-fields-container" onChange={handleChange}>
        <label htmlFor="position">Position</label>
        <input type="text" id="position" />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />
        <label htmlFor="mainTaks">Main Tasks</label>
        <input type="text" id="mainTasks" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
        <label htmlFor="from">From</label>
        <input type="text" id="from" />
        <label htmlFor="to">To</label>
        <input type="text" id="to" />
      </div>
      <div className="submit-button">
        <button type="submit" id="submitButton">
          Submit form
        </button>
      </div>
    </div>
  );
};

export default Experience;
