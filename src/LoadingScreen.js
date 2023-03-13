import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function LoadingScreen(props) {
    const style = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        delay: 300
    });

    return (
        <animated.div style={style}>
            <h1>Edward's Calorie Counter</h1>
        </animated.div>
    );
};

export default LoadingScreen;