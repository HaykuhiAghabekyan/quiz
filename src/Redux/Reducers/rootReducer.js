import { combineReducers } from 'redux';
import quizReducer from './quizReducer.js';
import questionReducer from './questionReducer';
import resultReducer from './resultReducer';
import finishReducer from './finishReducer';

export default combineReducers({
  quiz: quizReducer,
  question: questionReducer,
  result: resultReducer,
  isFinish:finishReducer
})