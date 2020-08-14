import React, { useState } from 'react';

import ActiveQiuz from './../../Component/ActiveQuiz/index.jsx';
import cls from './quiz.module.css';
import FinishQuiz from './../../Component/FinishQuiz';
import { connect } from 'react-redux';

const Quiz = (props) => {

  return (
    <section className={cls.quiz}>
      <h1>{props.title}</h1>

      {
        !props.isFinish ? <ActiveQiuz /> : <FinishQuiz />
      }

    </section>
  );
}

function mapStateToPrors(state) {
  return {
    title: state.quiz[state.question.activeQuiz].quizTitle,
    isFinish: state.isFinish
  }
}

export default connect(mapStateToPrors)(Quiz);
