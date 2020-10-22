import { QuestionsActionConstants } from '../constants/questions';

export const QuestionActions = {
    updateAnswer,
    submitAnswer
}

function updateAnswer(data) {
    return {
        type: QuestionsActionConstants.UPDATE_ANSWER,
        data
    }
}

function submitAnswer() {
    return {
        type: QuestionsActionConstants.SUBMIT_ANSWER
    }
}