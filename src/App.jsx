import './App.css'

function App() {

  const currQuestion = 0;
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

  return (
    <div className='app'>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currQuestion + 1}</span> / {quizQuestion.length}
        </div>
        <div className="question-text">
          {quizQuestion[0].question}
        </div>
      </div>
      <div className="answer-section">
          {quizQuestion[0].options.map(option => <button>{option.answer}</button>)}
        </div>
    </div>
  )
}
export default App
