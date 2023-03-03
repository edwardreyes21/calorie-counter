import { useState } from 'react';

function ActivityForm(props) {
    return (
        <p>TDEE: {props.tdee.toFixed(2)}</p>
    );
}

export default ActivityForm