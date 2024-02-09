import { useState } from "react";
import Msg from "./msg";

export default function questionBlock() {
    const [score, changeScore] = useState(0);
    const [msg, changeMsg] = useState(null);
    const [isPositive, changeIsPositive] = useState(false);
    const [number, changeNumber] = useState(0);
    const [isButtonClicked, setIfButtonClicked] = useState(false);
    const [selectedanswer, changeSelectedanswer] = useState(null);
    const questions = [
        {
            question: 'What is the full form of HTML?',
            options: [
                'Hyper Text Transfer Protocol',
                'Hyper Text Mark Language',
                'Hyper Text Markup Protocol',
                'Hyper Text Markup Language'
            ],
            answer: 3
        },
        {
            question: 'What is the full form of CSS?',
            options: [
                'Cascading Style Sheet',
                'Cascade Style Sheet',
                'Cascading Sheet Style',
                'Cascade Sheet Style'
            ],
            answer: 0
        },
        {
            question: 'How can you can import your CSS in HTML?',
            options: [
                'using css tag',
                'using link tag',
                'using script tag',
                'using import'
            ],
            answer: 1
        }
    ];
    const question = questions[number];
    return (
        <>
            <div className="text-3xl font-bold font-serif">{'Score: ' + score}</div>
            {number < questions.length ?
                <>
                    <div className="font-bold text-2xl">
                        {question.question}
                    </div>
                    <div className="flex flex-col justify-between h-1/2">
                        {(question.options).map((option, index) => {
                            return (
                                <div key={'option' + (index + 1)} className="flex gap-2">
                                    <input onChange={() => { changeSelectedanswer(option) }} type="radio" name="option" id={"option" + (index + 1)} />
                                    <label htmlFor={"option" + (index + 1)}>{option}</label>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between w-full px-5">
                        <button type="submit"
                            onClick={() => {
                                if (number > 0) {
                                    changeNumber(number - 1);
                                } else {
                                    changeIsPositive(false);
                                    changeMsg('this is first question');
                                    setIfButtonClicked(true);
                                }
                            }}
                            className="rounded-lg text-white bg-red-600 w-15 p-2 hover:bg-red-700">Previous</button>
                        <button type="submit"
                            onClick={() => {
                                if (selectedanswer === questions[number]['options'][questions[number]['answer']]) {
                                    changeIsPositive(true);
                                    changeNumber(number + 1);
                                    changeScore(score + 1);
                                    changeMsg('correct');
                                    changeSelectedanswer(null)
                                    setIfButtonClicked(true);
                                } else {
                                    changeIsPositive(false);
                                    changeMsg('inCorrect');
                                    setIfButtonClicked(true);
                                }
                            }}
                            className="rounded-lg text-white bg-green-600 w-15 p-2 hover:bg-green-700">Next</button>
                    </div>
                </> :
                <button
                    onClick={() => {
                        changeNumber(0);
                        changeScore(0);
                    }}
                    className="rounded-lg text-white bg-blue-600 w-15 p-2 hover:bg-blue-700">Retry</button>
            }
            <Msg message={msg} isPositive={isPositive} isButtonClicked={isButtonClicked} setIfButtonClicked={setIfButtonClicked} />
        </>
    );
}