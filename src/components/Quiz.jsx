import React, { useState } from 'react'
import { QuizData } from '../data/quizdata'
import QuizResult from './QuizResult';

const Quiz = () => {
  
    const [currQuestion, setCurrQuestion] = useState(0);
    const [score , setScore] = useState(0);
    const [selectedOption , setSelectedOption] = useState();
    const [showResult , setShowResult] = useState(false);

    const handleOnClick = ()=>{
        updateScore();
        if(currQuestion < QuizData.length-1){
            setCurrQuestion(currQuestion+1);
            setSelectedOption();
        }
        else{
           setShowResult(true);
        }
    }
    

    const updateScore = ()=>{
        if(selectedOption === QuizData[currQuestion].correctAnswer){
            setScore(score + 1);
        }
    }
   
    const resetAll = () =>{
        setScore(0);
        setShowResult(false);
        setCurrQuestion(0);
    }

  return (
    <div className='Main'>
        <h1>Quiz App</h1>
      <div className="container">
        {showResult ? (
            <QuizResult score={score} totalscore = {QuizData.length} tryAgain = {resetAll} />
        ):(
            <>
          <div className="question">
            <span id='question-number'>{currQuestion+1}. </span>
            <span id='question-text'>{QuizData[currQuestion].question}</span>
          </div>
          <div className="options">
           {QuizData[currQuestion].options.map((option, i)=>{
            return (
                <button className={`option-btn ${selectedOption === i ? "checked" : null}`}
                onClick={()=> setSelectedOption(i)}
                >{option}</button>
            )
           })}
          </div>

          <input type="button" value="Next" id="Next" onClick={handleOnClick}/>

          </>)} 
      </div>
    
    </div>
  )
}

export default Quiz
