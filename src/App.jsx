import { useState } from 'react';
import './App.css'
import AnswerSection from './components/AnswerSection';
import Geolocation from './components/Geolocation/Geolocation';
import GeolocationContainer from './components/Geolocation/GeolocationContainer';

function App() {

  const [currQuestion, setCurrQuestion] = useState(0);

  const quizQuestion = [
    {
      question: 'What is the time complexity of binary search ?',
      options : [
        {answer: 'O(n)', isCorrect: false},
        {answer: 'log(n)', isCorrect: true},
        {answer: 'nlog(n)', isCorrect: false},
        {answer: 'O(1)', isCorrect: false}
      ]
    },
    {
      question: 'What is the time complexity of linear search ?',
      options : [
        {answer: 'O(n)', isCorrect: true},
        {answer: 'log(n)', isCorrect: false},
        {answer: 'nlog(n)', isCorrect: false},
        {answer: 'O(1)', isCorrect: false}
      ]
    },
    {
      question: 'What is the time complexity of merge sort ?',
      options : [
        {answer: 'O(n)', isCorrect: false},
        {answer: 'log(n)', isCorrect: false},
        {answer: 'nlog(n)', isCorrect: true},
        {answer: 'O(1)', isCorrect: false}
      ]
    }
  ]

  function checkAnswer(option){
    if(option.isCorrect){
      console.log("Correct Answer");
    }
    else{
      console.log("Wrong Answer");
    }
  }

  function onNextClick(){
    if(currQuestion == quizQuestion.length-1) return;
    setCurrQuestion(currQuestion + 1);
  }

  const NewUiGeolocation = GeolocationContainer(Geolocation);

  return (
    <div className="card-wrapper">
      <NewUiGeolocation/>
      <div className='app'>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currQuestion + 1}</span> / {quizQuestion.length}
          </div>
          <div className="question-text">
            {quizQuestion[currQuestion].question}
          </div>
        </div>
        {/* <div className="answer-section">
            {quizQuestion[currQuestion].options.map((option, index) => <button key={index} onClick={() =>checkAnswer(option)}>{option.answer}</button>)}
        </div> */}

          <AnswerSection question={quizQuestion[currQuestion]} onAnswerCheck={checkAnswer}/>

      </div>
      <div>
        <button onClick={onNextClick}>Next</button>
      </div>
    </div>
  )
}
export default App;
