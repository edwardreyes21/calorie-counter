import { useState } from 'react';
import './App.css';

function App() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
        <h1>Calorie Counter</h1>
        <p>Fill out the form to calculate your weight trajectory over time</p>
        <form>
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
        </form>
    </div>
  );
}

export default App;
