import React, { useRef, useState } from "react";
import "./App.css";

function ControlledFormSingleState() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    hobbies: [],
    country: "",
  });

  const [errors, setErrors] = useState({}); // Validation error state

  const countries = ['USA', 'UK', 'INDIA'];
  const hobbies = ['cricket', 'music', 'chess'];

  // Handle change and validate in real-time
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Update form state
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        hobbies: checked
          ? [...prevState.hobbies, name]
          : prevState.hobbies.filter((hobby) => hobby !== name),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    // Validate the field in real-time
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = {};
    switch (name) {
      case "firstName":
        error[name] = value ? "" : "First name is required";
        break;
      case "lastName":
        error[name] = value ? "" : "Last name is required";
        break;
      case "age":
        error[name] = value && value > 0 ? "" : "Please enter a valid age";
        break;
      case "country":
        error[name] = value ? "" : "Please select a country";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female
      </div>
      <div>
        <label>Hobbies:</label>
        {hobbies.map((hobby) => (
          <div key={hobby}>
            <input
              type="checkbox"
              name={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </div>
        ))}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}



function UncontrolledFormSingleRef() {
  const formRef = useRef();
  const [errors, setErrors] = useState({}); // Validation error state

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: formRef.current.firstName.value,
      lastName: formRef.current.lastName.value,
      age: formRef.current.age.value,
      gender: formRef.current.gender.value,
      hobbies: [
        formRef.current.hobbiesMusic.checked ? "Music" : null,
        formRef.current.hobbiesSports.checked ? "Sports" : null,
      ].filter(Boolean), // Filter out unchecked hobbies
      country: formRef.current.country.value,
    };

    // Validate the form data
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName) errors.firstName = "First name is required";
    if (!data.lastName) errors.lastName = "Last name is required";
    if (!data.age || data.age <= 0) errors.age = "Please enter a valid age";
    if (!data.country) errors.country = "Please select a country";
    return errors;
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
      </div>
      <div>
        <label>Hobbies:</label>
        <input type="checkbox" name="hobbiesMusic" /> Music
        <input type="checkbox" name="hobbiesSports" /> Sports
      </div>
      <div>
        <label>Country:</label>
        <select name="country">
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <h3>Controlled Component - React's state controls the form</h3>
        <ControlledFormSingleState />
      </div>
      <div className="container">
      <h3>Uncontrolled Component - DOM controls the form and form data is accessed using the useRef hook</h3>
        <UncontrolledFormSingleRef />
      </div>
    </>
  );
}

export default App;
