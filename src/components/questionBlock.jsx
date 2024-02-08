import { useRef, useState, useEffect } from "react";
import Msg from "./msg";

export default function questionBlock() {
    const [score, changeScore] = useState(0);
    const [msg, changeMsg] = useState('');
    const isPositive = useRef('');
    const [number, changeNumber] = useState(1);
    const selectedanswer = useRef();
    const questions = [
        {
            question: 'What is the full form of HTML?',
            options: [
                'Hyper Text Transfer Protocol',
                'Hyper Text Markup Language',
                'Hyper Text Markup Protocol',
                'Hyper Text Markup Language'
            ],
            answer: 0
        },
        {
            question: 'What is the full form of CSS?',
            options: [
                'Cascading Style Sheet',
                'Cascading Style Sheets',
                'Cascading Style Sheets',
                'Cascading Style Sheets'
            ],
            answer: 0
        },
        {
            question: 'How can you can import your CSS in HTML?',
            options: [
                'by link tag',
                'by link tag',
                'by link tag',
                'by link tag'
            ],
            answer: 0
        }
    ];
    const question = questions[number - 1];
    return (
        <>
            <div className="text-3xl font-bold font-serif">{'Score: ' + score}</div>
            <div className="font-bold text-2xl">
                {question.question}
            </div>
            <div className="flex flex-col justify-between h-1/2">
                {(question.options).map((option, index) => {
                    return (
                        <div className="flex gap-2">
                            <input onChange={()=>{selectedanswer.current = option}} type="radio" name="option" id={"option" + (index + 1)} />
                            <label htmlFor={"option" + (index + 1)}>{option}</label>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between w-full px-5">
                <button type="submit"
                    onClick={() => {
                        if (number > 1) {
                            changeNumber(number - 1);
                        } else {
                            isPositive.current = false;
                            changeMsg('this is first');
                        }
                    }}
                    className="rounded-lg text-white bg-red-600 w-15 p-2 hover:bg-red-700">Previous</button>
                <button type="submit"
                    onClick={() => {
                        console.log(selectedanswer.current, questions[number-1]['options'][questions[number-1]['answer']]);
                        if (selectedanswer.current === questions[number-1]['options'][questions[number-1]['answer']]) {
                            console.log(true);
                            isPositive.current = true;
                            changeNumber(number + 1);
                            changeScore(score + 1);
                            changeMsg('correct');
                        } else {
                            isPositive.current = false;
                            changeMsg('inCorrect');
                        }
                    }}
                    className="rounded-lg text-white bg-green-600 w-15 p-2 hover:bg-green-700">Next</button>
            </div>
            <Msg message={msg} isPositive={isPositive.current}/>
        </>
    );
}