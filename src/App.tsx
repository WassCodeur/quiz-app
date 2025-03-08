import { useState } from 'react';
import './App.css';
import Question from './Question.tsx';


const useQuestions = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchQuestions = async () => {
    setLoading(true);
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    setQuestions(data.results);
    setLoading(false);
  };

  const nextQuestion = () => {
    setIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return { questions, loading, index, fetchQuestions, nextQuestion };
};

function App() {
  const { questions, loading, index, fetchQuestions, nextQuestion } = useQuestions();

  const answers = [...(questions[index]?.incorrect_answers || []), questions[index]?.correct_answer];

  return (
    <>
      <header className="App-header">
        <h1>Quiz App</h1>
        <button onClick={fetchQuestions} disabled={!loading}>
          {loading ? 'Start' : 'Quiz Started'}
        </button>
        <div>
          
        </div>

        {!loading && questions.length > 0 && (
          <Question
            question={questions[index]?.question}
            answers={answers}
            correct_answer={questions[index]?.correct_answer}
            nextQuestion={nextQuestion}
          
          />
        )}
      </header>
    </>
  );
}

export default App;

