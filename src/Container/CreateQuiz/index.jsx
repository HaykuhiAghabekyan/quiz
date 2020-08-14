import React, { useState } from 'react';
import CreateQuestion from './handlerFunction';
import { connect } from 'react-redux';


const CreateQuiz = (props) => {

  const [quizTitle, setQuizTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [var1, setVar1] = useState('');
  const [var2, setVar2] = useState('');
  const [var3, setVar3] = useState('');
  const [var4, setVar4] = useState('');
  const [rightId, setRightId] = useState('');
  const [questionId, setQuestionId] = useState(1);
  const [error, setError] = useState('');
  const [newQuiz, setNewQuiz] = useState([])



  let addQuiz = (e) => {
    e.preventDefault()
    let quiz = {
      quizTitle: quizTitle,
      question: newQuiz
    }
    newQuiz.length && props.addQuiz(quiz)


    setNewQuiz([]);
    setQuizTitle('');
  }


  let addQuestion = () => {

    if (var1 && var2 && var3 && var4 && questionId && question && rightId) {
      let answer = [
        { id: 1, text: var1 },
        { id: 2, text: var2 },
        { id: 3, text: var3 },
        { id: 4, text: var4 },
      ];

      let newQuestion = new CreateQuestion(questionId, rightId, question, answer);
      setNewQuiz(newQuiz => [...newQuiz, newQuestion])

      setQuestionId(questionId + 1)
      setError('')
      setQuestion('')
      setVar1('')
      setVar2('')
      setVar3('')
      setVar4('')
      setRightId('')

      console.log(newQuestion)
    } else {
      setError('error')
    }
  }

  return (
    <div>
      <h1> Create new quiz</h1>
      <p>{error}</p>
      <form action="">

        <input
          type="text"
          placeholder='Quiz title'
          onChange={({ target }) => setQuizTitle(target.value)}
          // onChange={e => setQuizTitle(e.target.value)}
          value={quizTitle}
        />

        <input
          type="text"
          placeholder='Question'
          onChange={e => setQuestion(e.target.value)}
          value={question}
        />

        <input
          type="text"
          placeholder='Variant 1'
          onChange={e => setVar1(e.target.value)}
          value={var1}
        />

        <input
          type="text"
          placeholder='Variant 2'
          onChange={e => setVar2(e.target.value)}
          value={var2}
        />

        <input
          type="text"
          placeholder='Variant 3'
          onChange={e => setVar3(e.target.value)}
          value={var3}
        />

        <input
          type="text"
          placeholder='Variant 4'
          onChange={e => setVar4(e.target.value)}
          value={var4}
        />

        <input
          type="number"
          placeholder='Right answer id'
          onChange={e => setRightId(e.target.value)}
          value={rightId}
        />

        <button onClick={addQuestion} type="button">Add question</button>
        <button onClick={addQuiz}>Add quiz</button>

      </form> */}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addQuiz: (quiz) => dispatch({ type: 'ADD_QUIZ',payload:quiz })
  }
}

export default connect(null, mapDispatchToProps)(CreateQuiz);
