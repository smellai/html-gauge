import React from 'react';
import PropTypes from 'prop-types';

import './gauge.css';

export const Gauge = ({ min, max, current }) => {
    
    const valueRange = max - min;
    const arcRange = 240; // from -120° to +120°

    // min could be different from 0, so lets subtract this offset
    const position = ((current - min) / valueRange) * arcRange - arcRange / 2;

    return (
        
            <div className="gauge">
                <div className="side">
                    <div className="value">{min}</div>
                    <div className="label">Min</div>
                </div>

                <div className="outer">
                    <div className="inner">
                        <div className="value">{current}</div>
                    </div>

                    <div
                        className="marker"
                        style={{ transform: `rotate(${position}deg)` }}
                    >
                        <div className='circle'></div>
                    </div>
                </div>

                <div className="side">
                    <div className="value">{max}</div>
                    <div className="label">Max</div>
                </div>
            </div>
    
    );
};

Gauge.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
};
