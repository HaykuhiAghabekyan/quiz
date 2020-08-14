import React from 'react';
import classes from './style.module.css';
import { connect } from 'react-redux';

const AnswersItem = (props) => {
  let cls;
  if (props.answer.id === +Object.keys(props.answerState)[0]) {
    cls = props.answerState[props.answer.id];
  }

  function clickItem(id) {
    window.setTimeout(() => {
      if (props.activeQuestion !== props.quiz[props.activeQuiz].question.length - 1) {
        props.setactiveQuestion()
        props.setAnwerState()
      } else {
        props.setIsFinish()
      }
    }, 2000)


    let a = props.result.filter(item => item.id === props.activeQuestion && item)
    if (id === props.quiz[props.activeQuiz].question[props.activeQuestion].rightAnswerId) {
      props.setAnwerStateTrue(id)
      a.length === 0 && props.setResultTrue(id, props.activeQuestion)
    } else {
      props.setAnwerStateFalse(id)
      a.length === 0 && props.setResultFalse(id, props.activeQuestion)
    }


    window.clearTimeout()

  }
  return (
    <li
      onClick={() => clickItem(props.answer.id)}
      className={classes[cls]}
    >
      {props.answer.text}
    </li>
  );
}

function mapStateToProps(state) {
  return {
    answerState: state.question.answerState,
    activeQuestion: state.question.activeQuestion,
    quiz: state.quiz,
    activeQuiz: state.question.activeQuiz,
    result: state.result
  }
}

function mapDispatchToPros(dispatch) {
  return {
    setactiveQuestion: () => dispatch({ type: 'CHANGE_ACT_QUESTION' }),
    setAnwerState: () => dispatch({ type: 'EMPTY_ANSWER_STATE' }),
    setIsFinish: () => dispatch({ type: 'FINISH' }),
    setAnwerStateTrue: (id) => dispatch({ type: 'ANS_SUCCESS', payload: id }),
    setAnwerStateFalse: (id) => dispatch({ type: 'ANS_ERROR', payload: id }),
    setResultTrue: (id, activeQuestion) => dispatch({ type: "ADD_RESULT_TRUE", payload: { id, activeQuestion } }),
    setResultFalse: (id, activeQuestion) => dispatch({ type: "ADD_RESULT_FALSE", payload: { id, activeQuestion } })
  }
}
export default connect(mapStateToProps, mapDispatchToPros)(AnswersItem);
