import React from 'react';
import { ResponseTemplates } from './Templates';

function AnswerTemplate(props) {
    const { type, questionData } = props;
    const ResponseTemplate = ResponseTemplates[type]

    // if no template found
    if (!ResponseTemplate) {
        return <div>Response Template Not Found</div>
    }

    return (
        <div className='answer-wrapper'>
            <div className='answers-area'>
                <ResponseTemplate {...props} questionData={questionData} />
            </div>
        </div>
    )
}

export default AnswerTemplate;