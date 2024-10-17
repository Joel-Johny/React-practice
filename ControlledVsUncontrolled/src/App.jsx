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
  const countries = ['USA','UK','INDIA']
  const hobbies = ['cricket','music','chess']
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        hobbies: checked? [...prevState.hobbies, name]:prevState.hobbies.filter((hobby) => hobby !== name),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
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
      <div>        <label>Hobbies:</label>

        {hobbies.map((hobby)=>{
          return(
            <div key={hobby}>
              <input
                type="checkbox"
                name={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              {hobby}
            </div>
          )
        })}

      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select a country</option>

            {countries.map((country)=>{
              return(
                <option key={country} value={country}>{country}</option>
              )
            })}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function UncontrolledFormSingleRef() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // formRef.current fetches me the form element then using .name.value will get me the value
    console.log(formRef.current.hobbiesMusic)
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

    console.log(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" />
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
