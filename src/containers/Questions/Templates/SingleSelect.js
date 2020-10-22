import React from 'react';
import RadioGroup from '../../../components/RadioGroup'

function SingleSelect(props) {
    const { answers, 
        answer_type, questionData: { row_size }, 
        onChange, selectedValue } = props;
    return (
        <div>
            <RadioGroup
                options={answers}
                type={answer_type}
                row={row_size}
                onChange={onChange}
                selected_value={selectedValue}
            />
        </div>
    )
}

export default SingleSelect;