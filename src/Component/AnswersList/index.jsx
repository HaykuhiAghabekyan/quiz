import React from 'react';
import AnswerItem from './../AnswerItem/index.jsx';
import { connect } from 'react-redux';


const AnswersList = (props) => {
  return (
    <ul>
      {
        props.answers.map((answer,ind)=>{
          return  <AnswerItem
            key={ind}
            answer={answer}
          />
        })
      }

    </ul>
  );
}

function mapStateToProps(state) {
  return {
    answers:state.quiz[state.question.activeQuiz].question[state.question.activeQuestion].answers,
  }
}
export default connect(mapStateToProps)(AnswersList);
