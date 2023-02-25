import { useState } from 'react';
import './App.css';

function App() {
  const [measurement, setMeasurement] = useState("imperial");
  const [tdee, setTDEE] = useState(null);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);

  const handleMeasurementChange = (event) => {
    setMeasurement(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Measurement: ${measurement}, Gender: ${gender},
                 Height: ${height}, Weight: ${weight}, Age: ${age}`);

    if (measurement == "imperial") {
      if (gender == "male") {
        setTDEE(66.47 + (6.24 * weight) + (12.7 * height) - (6.75 * age));
      } 
      else if (gender == "female") {
        setTDEE(65.51 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      }
    } 
    else if (measurement == "metric") {
      if (gender == "male") {
        setTDEE(66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      } 
      else if (gender == "female") {
        setTDEE(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      }
    }
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
          <label>
            Height:
            <input type="number" step="1" value={height} onChange={(event) => setHeight(event.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {tdee && <p>Your TDEE is {tdee.toFixed(2)} calories</p>}
    </div>
  );
}

export default App;
