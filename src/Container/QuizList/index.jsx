import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


const QuizList = (props) => {
console.log(props)
  return (
    <div>
      {
        props.quizData.map((elm,ind) => {
          return (
            <h3 key={ind}>
              <Link to={`/quiz/${ind}`}>{elm.quizTitle}</Link>
            </h3>
          )
        })
      }
    </div>
  );
}

function mapStateToProps(state){
  return{
    quizData:state.quiz
  }
}

export default connect(mapStateToProps)(QuizList);
