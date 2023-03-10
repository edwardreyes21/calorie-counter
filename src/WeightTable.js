import { useState } from 'react';

function WeightTable(props) {
    const [weeks, setWeeks] = useState(12);
    const [weight, setWeight] = useState(props.weight);

    return (
        <div className="WeightTable">

        </div>
    )
}

export default WeightTable;