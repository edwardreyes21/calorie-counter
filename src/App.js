import { useState } from 'react';
import './App.css';

function App() {
  const [measurement, setMeasurement] = useState("imperial");
  const [tdee, setTDEE] = useState(null);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);

  const handleMeasurementChange = (event) => {
    setMeasurement(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Measurement: ${measurement}, Gender: ${gender}, Weight: ${weight}, Age: ${age}`);
  }

  return (
    <div className="App">
        <h1>Calorie Counter</h1>
        <p>Fill out the form to calculate your weight trajectory over time</p>
        <form onSubmit={handleSubmit}>
          <label>
            Imperial
            <input type="radio" value="imperial" checked={measurement === "imperial"} onChange={handleMeasurementChange} />
          </label>
          <label>
            Metric
            <input type="radio" value="metric" checked={measurement === "metric"} onChange={handleMeasurementChange} />
          </label>
          <label>
            Male
            <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
          </label>
          <label>
            Female
            <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} />
          </label>
          <label>
            Age:
            <input type="number" step="1" value={age} onChange={(event) => setAge(event.target.value)} />
          </label>
          <label>
            Weight:
            <input type="number" step="1" value={weight} onChange={(event) => setWeight(event.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {tdee && <p>Your TDEE is {tdee}</p>}
    </div>
  );
}

export default App;
