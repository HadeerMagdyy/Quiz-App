import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Route} from "react-router-dom";
import quizinstruction from './components/quiz/quizinstructions';
import Play from './components/quiz/play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/play/instructions" exact component={quizinstruction}></Route>
      <Route path="/play/quiz" exact component={Play}></Route>
      <Route path="/play/quizSummary" exact component={QuizSummary}></Route>

    </Router>
  );
}

export default App;
