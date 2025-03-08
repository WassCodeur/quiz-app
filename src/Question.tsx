import { useState } from 'react'
import './App.css'
import rearrangeArray from '../utils/entropy.ts'


interface QuestionProps {

  question: string;

  answers: string[];

  correct_answer: string;

  nextQuestion: () => void;

}
// , answers, correct_answer

const Question: React.FC<QuestionProps> = ({ question, answers, correct_answer, nextQuestion }) => {
  const answersClass = document.getElementsByClassName('answer')
  const [score, setScore] = useState(0)
  const [numberOFAttempts, setNumberOFAttempts] = useState(0)
  const answersArray = rearrangeArray(answers)


  return (
    <>
      {/* quiz app */}
      <div className="container">
       
        <div className="question"> {question}</div>
        <div className="answers">
          
          {answersArray.map((answer, index) => {
            return (
              <button
                key={index}
                className="answer"
                onClick={() => {
                  if (answer === correct_answer) {
                    setScore(score + 1)
                    setNumberOFAttempts(numberOFAttempts + 1)
                  }else{
                    Array.from(answersClass).forEach((element) => {
                      if ((element as HTMLElement).innerText === correct_answer) {
                        (element as HTMLElement).style.backgroundColor = 'green';
                      }
                    });
                  }
                }}
              >
                {answer}
              </button>
            )
          })}
        </div>

        <div className="score">You answered {score} out of {numberOFAttempts} questions correctly</div>
        <button
          onClick={() => {
            Array.from(answersClass).forEach((element) => {
              (element as HTMLElement).style.backgroundColor = '';
            });
            setNumberOFAttempts(numberOFAttempts + 1)
            nextQuestion();
          }}
        >
          Next Question
        </button>

      </div>
    </>
  )
}

export default Question




