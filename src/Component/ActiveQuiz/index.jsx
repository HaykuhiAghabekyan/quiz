import React from 'react';
import AnswerList from './../AnswersList/index.jsx';
import cls from './activeQuiz.module.css';
import { connect } from 'react-redux';

const ActiveQuiz = (props) => {
  return (
    <div className={cls.quiz}>
      <h2><b>{props.currentQuestion},</b>{props.question}
        <b>{props.quizCount}-ից {props.currentQuestion} </b>
      </h2>
      <AnswerList/>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentQuestion: state.question.activeQuestion + 1,
    quizCount: state.quiz[state.question.activeQuiz].question.length,
    question: state.quiz[state.question.activeQuiz].question[state.question.activeQuestion].question
  }
}
export default connect(mapStateToProps)(ActiveQuiz);
