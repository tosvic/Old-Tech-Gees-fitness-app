import React, { useState } from 'react';
import styles from "./Form.module.css"
import { MdSkipNext } from "react-icons/md";


function UserForm() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight]= useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'height' || name === 'age') {
      // Handle numerical input (height and age)
      setAge(parseInt(value));
      setHeight(parseInt(value));
    } else {
      // Handle text input (name)
      setName(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Submitted data:', name, height, age);
    setName('');
    setHeight(0);
    setAge(0);
  };

  const handleNext = () => {
    if (gender) {
        navigate.push('/nextpage')
    }

  return (
    <>
    
    <form onSubmit={handleSubmit} className={styles.main}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="height">Height (cm):</label>
      <input
        type="number"
        id="height"
        name="height"
        value={height}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="weight">Weight (cm):</label>
      <input
        type="number"
        id="weight"
        name="height"
        value={weight}
        onChange={handleChange}
      />
       <label htmlFor="goal">Whats your Goal :</label>
      <input
        type="number"
        id="weight"
        name="height"
        value={weight}
        onChange={handleChange}
      />
       <label htmlFor="regular">Your regular physical activity level:</label>
      <input
        type="number"
        id="weight"
        name="height"
        value={weight}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>

    
    <div className="btn">
                      <button>Next </button>
                        <MdSkipNext />
                    </div>
    </>
    
  );
}
}

export default UserForm
