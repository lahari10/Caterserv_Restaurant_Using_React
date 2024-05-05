import React from 'react';
import Counter from './CustomerCount'; 
import '../../Styles/StatsSection.css';

const StatsSection = () => {
    return (
        <div className="stats-section">
            <div className="stat-item" style={{ backgroundColor: '#f6cf4d', color: '#721c24' }}>
                <Counter start={0} end={100} duration={2000} />
                <p>Happy Customers</p>
            </div>
            <div className="stat-item" style={{ backgroundColor: '#f6cf4d', color: '#155724' }}>
                <Counter start={0} end={200} duration={2000} />
                <p>Events Completed</p>
            </div>
            <div className="stat-item" style={{ backgroundColor: '#f6cf4d', color: '#004085' }}>
                <Counter start={0} end={50} duration={2000} />
                <p>Expert Chefs</p>
            </div>
        </div>
    );
};

export default StatsSection;
