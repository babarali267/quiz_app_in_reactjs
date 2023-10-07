
import { useState } from "react"
import quizData from "./compoent/question"

import './style.css'

const App =()=>{
  const [currentQuestion,setcurrentQuestion]= useState(0)
  const [userAnswer,setUserAnser] = useState([])
  const [score,setScore] = useState(0)
  const handelAnsweClick = (selectoption) =>{
     const isCorrect = quizData[currentQuestion].correctAnswer === selectoption

      setUserAnser([ ...userAnswer, {question : currentQuestion,answer: selectoption}])
      if(isCorrect){
        setScore(score + 1)
      }

      setcurrentQuestion( currentQuestion + 1)
  }

  const restQuize = ()=>{
     setcurrentQuestion(0)
     setUserAnser([])
     setScore(0)
  }



  return(<>
      <div className="quize">
       
         {
           currentQuestion < quizData.length ? (
               <div>
                   <h2>{quizData[currentQuestion].question}</h2>
                   <ul>
                     {quizData[currentQuestion].options.map((option,index)=>(
                       <li key={index} onClick={()=>handelAnsweClick(option)} >{option}</li>
                     ))}
                   </ul>
              </div>
           ):(
             <div className="complete">
               <h2>quize Completed !</h2>
               <p>Your Score {score} / {quizData.length}</p>
               <button onClick={restQuize}>Reset</button>
            </div>
           )
         }
      </div>
  </>)
}



export default App
