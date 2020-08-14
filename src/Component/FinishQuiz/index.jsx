import React from 'react';
import cls from './style.module.css';
import {connect} from 'react-redux'



const FinishQuiz = ({quiz,result,activeQuiz}) => {
  let rightCount= result.filter(item=>item.answer && item).length
  let count = quiz[activeQuiz].question.length
  return (
    <div className = {cls.finish}>
      <h2>{count }- ից {rightCount} ճիշտ է</h2>
      {
       quiz[activeQuiz].question.map((item,ind)=>{
         let icon =  result[ind].answer ? 'fa fa-check' : 'fa fa-times';
          return (
            <div key={ind}>
              {item.question}
              <span className={icon }></span>
            </div>
          )
        })
      }
    </div>
  );
}

function mapStateToProps(state){
 return {
  quiz:state.quiz,
  result:state.result,
  activeQuiz:state.question.activeQuiz
 }
}

export default connect(mapStateToProps)(FinishQuiz);
