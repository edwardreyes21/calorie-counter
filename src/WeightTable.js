import { useState } from 'react';

function WeightTable(props) {
    const [weeks, setWeeks] = useState(12);

    let weight = props.weight;
    const weightData = [];

    for (let i = 1; i <= weeks; i++) {
        console.log(`WEEK: ${i}`);
        weightData.push({week: i, new_weight: weight});

        const weeklyCaloricDeficit = (props.tdee - props.caloriesConsumed) * 7;
        console.log(`    weekly caloric deficit: ${weeklyCaloricDeficit}`);

        if (props.measurement == "imperial") {
            console.log(`  old weight: ${weight}`)
            weight = weight - (weeklyCaloricDeficit / 3500);
            console.log(`  new weight: ${weight}`)
        }
        else if (props.measurement == "metric") {
            weight = weight - (weeklyCaloricDeficit / 7700);
        }
    }

    return (
        <div className="WeightTable">
            <h2>Weight Gain/Loss Tracker</h2>
        </div>
    )
}

export default WeightTable;