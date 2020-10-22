import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Button from '../../components/Button';

// import templates
import QuestionTemplate from './QuestionTemplate';
import AnswerTemplate from './AnswerTemplate';

// import Actions
import { QuestionActions } from '../../store/actions/questions'

function Questions(props) {
    const { history } = props;
    const { questions, user_response } = useSelector(state => state.questions);
    const [questionIndex, setQuestionIndex] = useState(0);

    const dispatch = useDispatch();

    const questionData = questions[questionIndex]
    const { id, question, question_hint,
        question_type, answers, answer_type, why_answer } = questionData

    return (
        <>
        <div className="template-wrapper">
            <div class="pagination">{questionIndex + 1} / {questions.length}</div>
            <div className="content-wrapper">
                <QuestionTemplate question={question} hint={question_hint} />
                <AnswerTemplate
                    type={question_type}
                    answers={answers}
                    answer_type={answer_type}
                    questionData={questionData}
                    onChange={(value) => {
                        dispatch(QuestionActions.updateAnswer({
                            [id]: value
                        }))
                    }}
                    selectedValue={user_response[id] || null}
                />
            </div>
            <div class="action-wrapper">
                <Button
                    className="nav-button secondary arrow-left"
                    text="Previous"
                    arrow="left"
                    onClick={() => {
                        if (questionIndex) {
                            setQuestionIndex(questionIndex - 1)
                        } else {
                            history.push('')
                        }
                    }}
                />
                <Button
                    className="nav-button primary arrow-right"
                    text="Next"
                    arrow="right"
                    onClick={() => {
                        if (questionIndex + 1 < questions.length) {
                            setQuestionIndex(questionIndex + 1)
                        } else {
                            dispatch(QuestionActions.submitAnswer());
                        }
                    }}
                />
            </div>
        </div>
        <div className="footer-why txt-left">
            <div className="footer-ques">Why do you need to answer this?</div>
            <div className="footer-desc">{why_answer}</div>
        </div>
        </>
    )
}

export default Questions;