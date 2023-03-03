import { useState } from 'react';

function ActivityForm(props) {
    const [multiplier, setMultiplier] = useState(1);

    const handleMultiplierChange = (event) => {
        setMultiplier(event.target.value);
    }

    return (
        <div className="ActivityForm">
            <p>TDEE: {(props.tdee * multiplier).toFixed(2)}</p>
            <form>
                <label for="choices">Choose one:</label>
                <select id="choices" name="choices" value={multiplier} onChange={handleMultiplierChange}>
                    <option value="1.0">Basal Metabolic Rate (1.0)</option>
                    <option value="1.2">Sedentary (1.2)</option>
                </select>
            </form>
        </div>
    );
}

export default ActivityForm