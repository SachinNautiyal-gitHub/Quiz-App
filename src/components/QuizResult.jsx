import React from 'react'

const QuizResult = (props) => {
  return (
    <>
    <div>
      Your Score : {props.score} <br />
      Total Score : {props.totalscore}
    </div>

    <button id='next-button' onClick={props.tryAgain}> Try Again</button>

    </>
  )
}

export default QuizResult
