import { useCallback, useState } from "react";
import { QuestionBlock } from "./components/questionBlock";
import { IoReload } from "react-icons/io5";

const questions = [
  {
    question: "What is 3 + 3?",
    answers: ["3", "7", "1", "6"],
    correctAnswer: 3,
  },
  {
    question: "What is 3 + 5?",
    answers: ["11", "8", "5", "17"],
    correctAnswer: 1,
  },
  {
    question: "What is 6 + 4?",
    answers: ["10", "14", "12", "18"],
    correctAnswer: 0,
  },
  {
    question: "What is 7 + 3?",
    answers: ["10", "14", "12", "18"],
    correctAnswer: 0,
  },
];

function evaluateScore(markedAnswers) {
  return (
    (Object.keys(markedAnswers).reduce(
      (prev, curr, i) =>
        prev +
        (markedAnswers[curr].isSaved
          ? markedAnswers[curr].answer === questions[i].correctAnswer
          : 0),
      0
    ) /
      questions.length) *
    100
  );
}

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState({});

  function markAnswer(answer) {
    setMarkedAnswers(() => {
      markedAnswers[currentQuestion] = {
        answer,
        isSaved: false,
      };
      return { ...markedAnswers };
    });
  }

  const markAnswerCallback = useCallback(markAnswer, [markAnswer]);

  return (
    <main className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="w-1/2 bg-white rounded-xl">
        <div className="space-y-4">
          <h1 className="text-4xl text-center font-bold p-3">Quiz App</h1>
          <div className="h-1 w-full">
            <div
              className="bg-blue-300 h-full transition-all duration-500"
              style={{
                width: `${(currentQuestion / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
        {currentQuestion < questions.length ? (
          <div className="p-4 space-y-5">
            <div className="text-xl font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <QuestionBlock
              question={questions[currentQuestion]}
              markAnswer={markAnswerCallback}
              selectedAnswer={markedAnswers[currentQuestion]?.answer}
            />
            <div className="flex justify-between">
              <div className="flex gap-4">
                <button
                  className="p-2 bg-blue-600 text-white rounded-lg cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  Previous
                </button>
              </div>
              <div className="flex gap-4">
                <button
                  className="p-2 bg-blue-600 text-white rounded-lg cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
                  disabled={currentQuestion === questions.length - 1}
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                >
                  Next
                </button>
                <button
                  className="p-2 bg-green-600 text-white rounded-lg cursor-pointer disabled:bg-green-300 disabled:cursor-not-allowed"
                  disabled={
                    !markedAnswers[currentQuestion]
                  }
                  onClick={() => {
                    markedAnswers[currentQuestion].isSaved = true;
                    setCurrentQuestion(currentQuestion + 1);
                  }}
                >
                  {currentQuestion === questions.length - 1
                    ? "Submit"
                    : (!!markedAnswers[currentQuestion] &&
                      markedAnswers[currentQuestion].isSaved)
                    ? "Saved"
                    : "Save & Next"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 py-16 flex flex-col justify-between items-center h-[50vh]">
            <h1 className="text-3xl font-bold">Quiz Completed 🥳</h1>
            <div className="space-y-4">
              <h1 className="text-2xl">Your Score</h1>
              <h1 className="text-5xl font-mono">
                <span>{evaluateScore(markedAnswers)}</span>%
              </h1>
            </div>
            <button
              className="p-2 bg-blue-600 text-white rounded-full cursor-pointer"
              onClick={() => {
                setCurrentQuestion(0);
                setMarkedAnswers({});
              }}
            >
              <IoReload
                className="hover:rotate-90 transition-all duration-300"
                size={24}
              />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
