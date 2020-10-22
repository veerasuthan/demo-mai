import React from 'react';

function Rating(props) {
    const { questionData: { range_min, range_max,
        left_answer_hint, left_answer_icon, left_description,
        right_answer_hint, right_answer_icon, right_description }, onChange, selectedValue } = props;

    return (
        <div className='range-slider'>
            <span className='slider-left'>
                <span>
                    <img src={left_answer_icon} />
                </span>
                <span className={'hint'}>{left_answer_hint}</span>
                <span className={'desc'}>{left_description}</span>
            </span>
            <span className='slider'>
                <input
                    type="range"
                    min={range_min}
                    max={range_max}
                    value={selectedValue || "0"}
                    className="slider"
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />
            </span>
            <span className='slider-right'>
                <span>
                    <img src={right_answer_icon} />
                </span>
                <span className={'hint'}>{right_answer_hint}</span>
                <span className={'desc'}>{right_description}</span>
            </span>
        </div>
    )
}

export default Rating;