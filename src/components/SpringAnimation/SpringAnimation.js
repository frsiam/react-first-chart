import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const SpringAnimation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        reset: true,
        delay: 100,
        reverse: flip,
        onRest: () => set(!flip)
    })
    return (
        <div className='mt-12'>
            <animated.div style={props}>I will fade in</animated.div>
        </div>
    );
};

export default SpringAnimation;