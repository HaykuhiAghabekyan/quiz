import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Layout from './Hoc/Layout';
import Quiz from './Container/Quiz';
import QuizList from './Container/QuizList';
import CreateQuiz from './Container/CreateQuiz';
import Auth from './Container/Auth';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Layout>
        <Route path = '/' exact  component={Auth} />
        <Route path = '/quiz/:id'  component={Quiz} />
        <Route path = '/quizList' component={QuizList} />
        <Route path = '/creteQuiz' component={CreateQuiz} />
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
