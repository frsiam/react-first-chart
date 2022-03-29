import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const SpringAnimation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        reset: true,
        delay: 250,
        reverse: flip,
        onRest: () => set(!flip)
    })
    return (
        <div className='mt-12'>
            <animated.div style={props}>
                <span className='text-3xl bg-rose-500 p-5 font-semibold font-mono rounded-lg text-lime-100'>Hey this is spring animation</span>
            </animated.div>
        </div>
    );
};

export default SpringAnimation;