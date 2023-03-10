import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import ActivityForm from './ActivityForm';
import LoadingScreen from './LoadingScreen';

function App() {
  const [measurement, setMeasurement] = useState("imperial");
  const [tdee, setTDEE] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("set loading is now false");
      setLoading(false);
    }, 2000);
  }, []);

  const handleMeasurementChange = (event) => {
    setMeasurement(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitClicked(true);

    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000);

    if (measurement === "imperial") {
      if (gender === "male") {
        setTDEE(66.47 + (6.24 * weight) + (12.7 * height) - (6.75 * age));
      } 
      else if (gender === "female") {
        setTDEE(65.51 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      }
    } 
    else if (measurement === "metric") {
      if (gender === "male") {
        setTDEE(66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      } 
      else if (gender === "female") {
        setTDEE(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      }
    }
  }

  useEffect(() => {
    console.log(`new tdee: ${tdee}`);
  }, [tdee]);

  useEffect(() => {
    if (measurement === "imperial") {
      if (gender === "male") {
        setTDEE(66.47 + (6.24 * weight) + (12.7 * height) - (6.75 * age));
      } 
      else if (gender === "female") {
        setTDEE(65.51 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
      }
    } 
    else if (measurement === "metric") {
      if (gender === "male") {
        setTDEE(66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
      } 
      else if (gender === "female") {
        setTDEE(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
      }
    }
  }, [measurement, gender, weight, age]);

  return (
    <div className="App">
      {loading && (<LoadingScreen />)}
      {!loading && (
        <>
          <h1>Calorie Counter</h1>
          <p>Fill out the form to calculate your weight trajectory over time</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>
                Imperial
                <input type="radio" value="imperial" checked={measurement === "imperial"} onChange={handleMeasurementChange} />
              </label>
              <label>
                Metric
                <input type="radio" value="metric" checked={measurement === "metric"} onChange={handleMeasurementChange} className="opposite-side" />
              </label>
            </div>
            <div className="input-container">
              <label>
                Male
                <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
              </label>
              <label>
                Female
                <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} className="opposite-side" />
              </label>
            </div>
            <div className="input-container">
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
            </div>
            <div className="input-container">
              <label>
                Daily calories to consume:
                <input type="number" step="1" value={caloriesConsumed} onChange={(event) => setCaloriesConsumed(event.target.value)} />
              </label>
            </div>
            <button type="submit" className={isSubmitting ? 'submitting' : ''}>Submit</button>
          </form>
        </>
      )}
      {submitClicked && (
        <ActivityForm 
          measurement={measurement} 
          caloriesConsumed={caloriesConsumed} 
          weight={weight} 
          tdee={tdee} 
        />
      )}
    </div>
  );
}

export default App;
