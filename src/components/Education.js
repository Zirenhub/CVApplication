const Education = (props) => {
  const handleChange = (e) => {
    props.onChange(e, 'education');
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h1>Education</h1>
      </div>
      <div className="form-fields-container" onChange={handleChange}>
        <label htmlFor="school">School Name</label>
        <input type="text" id="school" />
        <label htmlFor="schoolTitle">Title of Study</label>
        <input type="text" id="schoolTitle" />
        <label htmlFor="schoolCity">City</label>
        <input type="text" id="schoolCity" />
        <label htmlFor="Degree">Degree</label>
        <input type="text" id="Degree" />
        <label htmlFor="schoolFrom">From</label>
        <input type="text" id="schoolFrom" />
        <label htmlFor="schoolTo">To</label>
        <input type="text" id="schoolTo" />
      </div>
    </div>
  );
};

export default Education;
