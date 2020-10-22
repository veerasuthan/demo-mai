import React from 'react';

function QuestionTemplate(props) {
    const { question, hint } = props;
    return (
        <div className={`question-wrapper ${hint ? 'hint' : ''}`}>
            <div className='question-text'>{question}</div>
            {
                hint && (
                    <div className='question-hint'>{hint}</div>
                )
            }
        </div>
    )
}

export default QuestionTemplate;