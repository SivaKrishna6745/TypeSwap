import React from 'react';

type TextStreamProps = {
    targetText: string;
    userInput: string;
};

const TextStream = ({ targetText, userInput }: TextStreamProps) => {
    const targetTextArray = targetText.split('');
    targetTextArray.map((letter, idx) => {
        if (letter === userInput[idx]) {
            console.log("it's correct");
        } else if (letter !== userInput[idx]) {
            console.log("it's incorrect");
        } else {
            console.log("it's pending");
        }
    });

    return (
        <div className="w-280 bg-slate-400 p-4 rounded-lg flex flex-wrap justify-center">
            {targetTextArray.map((letter, idx) => {
                return (
                    <span key={idx} className="mx-0.5 break-words">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default TextStream;
