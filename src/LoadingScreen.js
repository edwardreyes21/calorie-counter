import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function LoadingScreen(props) {
    const style = useEffect({
        to: {opacity: 1},
        from: {opacity: 0},
        delay: 1000
    });

    return (
        <animated.div style={style}>
            <h1>Calorie Counter loading..</h1>
        </animated.div>
    );
};

export default LoadingScreen;