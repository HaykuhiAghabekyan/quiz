let initialState = {
  activeQuestion: 0,
  activeQuiz: 0,
  answerState: {}
}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ACT_QUESTION': return { ...state, activeQuestion: state.activeQuestion + 1 };break;
    case 'EMPTY_ANSWER_STATE': return { ...state,  answerState: {}};break;
    case 'ANS_SUCCESS': return { ...state,  answerState: {[action.payload]:'success'}};break;
    case 'ANS_ERROR': return { ...state,  answerState: {[action.payload]:'error'}};break;
    default :  return state
  }

}