import { mockData } from '../../data/mockData'

import { QuestionsActionConstants } from '../constants/questions'

// cloning the data
const initialState = JSON.parse(JSON.stringify(mockData))

export default function (state = initialState, action) {
    switch (action.type) {
        case QuestionsActionConstants.UPDATE_ANSWER:
            return {
                ...state,
                user_response: {
                    ...state.user_response,
                    ...action.data
                }
            }
        case QuestionsActionConstants.SUBMIT_ANSWER:
            console.log("user responses: ", state.user_response)
            return state;
        default:
            return state
    }
}