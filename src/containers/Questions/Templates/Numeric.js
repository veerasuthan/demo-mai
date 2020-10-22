import React, { useState } from 'react';

function Numeric(props) {
    const { selectedValue, onChange } = props
    const [numeriValue, setNumericValue] = useState(selectedValue || 0);

    return (
        <div className='numeric-selector'>
            <button onClick={() => {
                if (numeriValue) {
                    const updatedValue = numeriValue - 1;
                    setNumericValue(updatedValue);
                    onChange(updatedValue)
                }
            }}>-</button>
            <span className='value-holder'>{numeriValue}</span>
            <button onClick={() => {
                const updatedValue = numeriValue + 1;
                setNumericValue(updatedValue);
                onChange(updatedValue)
            }}>+</button>
        </div>
    )
}

Numeric.defaultProps = {
    value: 0,
    onChange: () => {}
}

export default Numeric;