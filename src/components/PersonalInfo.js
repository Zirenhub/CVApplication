const PersonalInfo = (props) => {
  const handleChange = (e) => {
    props.onChange(e, 'personalInfo');
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h1>Personal Information</h1>
      </div>
      <div className="form-fields-container" onChange={handleChange}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="4" cols="50" maxLength={550} />
      </div>
    </div>
  );
};

export default PersonalInfo;
