import React, { useState, useEffect } from 'react';

const Counter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
        let step = (end - start) / ((duration / 1000) * 30); // calculate step to increment every 33ms

        let interval = setInterval(() => {
            setCount(prevCount => {
                const nextCount = prevCount + step;
                if (nextCount >= end) {
                    clearInterval(interval);
                    return end; // Ensure the counter stops at the final end value
                }
                return nextCount;
            });
        }, 60); 

        return () => clearInterval(interval); 
    }, [start, end, duration]);

    return (
        <div>
            {Math.floor(count)}
        </div>
    );
};

export default Counter;
