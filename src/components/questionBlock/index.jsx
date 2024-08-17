import PropTypes from "prop-types";

QuestionBlock.propTypes = {
  question: PropTypes.object,
  markAnswer: PropTypes.func,
  selectedAnswer: PropTypes.number,
};

export function QuestionBlock({
  question,
  markAnswer,
  selectedAnswer = undefined,
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg">{question.question}</h1>
      <div className="flex flex-col gap-4">
        {question.answers.map((answer, index) => (
          <button
            onClick={() => markAnswer(index)}
            key={index}
            className={`p-3 border rounded-lg cursor-pointer text-left flex gap-4 ${
              selectedAnswer === index
                ? "bg-blue-100 border border-blue-500 hover:bg-blue-200"
                : "hover:bg-gray-100 border border-gray-300"
            }`}
          >
            <span className="font-bold">{String.fromCharCode(65 + index)}</span>
            <span>{answer}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
