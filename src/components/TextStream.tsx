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
        <div className="flex">
            {targetTextArray.map((letter, idx) => {
                return (
                    <span key={idx} className="mx-1 break-words">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default TextStream;
