import { useEffect, useRef, useState } from 'react';

const useTypingStats = (targetText: string, userInput: string) => {
    const totalTyped = userInput.length;

    let correctChars = 0;
    for (let i = 0; i < targetText.length; i++) {
        if (targetText[i] === userInput[i]) {
            correctChars++;
        }
    }
    const accuracy = totalTyped === 0 ? 100 : (correctChars / totalTyped) * 100;

    const startTime = useRef<number | null>(null);
    useEffect(() => {
        if (!startTime.current && userInput.length > 0) {
            startTime.current = Date.now();
        }
    }, [userInput]);

    const elapsedTime = startTime.current !== null ? Date.now() - startTime.current : 0;
    const minutes = elapsedTime / 60000;
    const wpm = minutes > 0 ? correctChars / 5 / minutes : 0;
    const resetStats = () => {
        startTime.current = null;
    };

    return {
        wpm,
        accuracy,
        errors: totalTyped - correctChars,
        isFinished: userInput === targetText,
        elapsedTime,
        resetStats,
    };
};

export default useTypingStats;
