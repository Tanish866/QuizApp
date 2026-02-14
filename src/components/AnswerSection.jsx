function AnswerSection(props){
    return (
        <div className="answer-section">
            {props.question.options.map((option, index) => <button key={index} onClick={() => props.onAnswerCheck(option)}>{option.answer}</button>)}
        </div>
    )
}
export default AnswerSection;