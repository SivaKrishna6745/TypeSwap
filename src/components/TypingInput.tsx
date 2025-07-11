import React, { useEffect, useRef } from 'react';
import FeedbackPanel from './FeedbackPanel';

type Mode = 'quotes' | 'paragraphs' | 'codes';
type TypingInputProps = {
    value: string;
    onChange: (value: string) => void;
    mode: Mode;
    targetText: string;
};

const caretColorMap: Record<Mode, string> = {
    quotes: 'caret-red-500',
    paragraphs: 'caret-green-500',
    codes: 'caret-blue-500',
};

const fontMap: Record<Mode, string> = {
    quotes: 'font-serif',
    paragraphs: 'font-sans',
    codes: 'font-mono',
};

const TypingInput = ({ value, onChange, mode, targetText }: TypingInputProps) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (inputRef.current) inputRef.current?.focus();
    }, []);
    let targetChars = targetText.split('');
    let typedChars = value.split('');
    let feedback = [];
    for (let i = 0; i < typedChars.length; i++) {
        feedback.push({
            char: typedChars[i],
            status: typedChars[i] === targetChars[i],
            idx: i,
            isExtra: i >= targetChars.length,
        });
    }

    return (
        <div className="max-w-screen flex flex-col items-center">
            <textarea
                rows={3}
                className={`w-4xl h-full p-3 rounded-md resize-none border bg-neutral-100 focus:outline-none focus:ring-blue-400 cursor-text ${caretColorMap[mode]} ${fontMap[mode]}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Let your fingers speak…"
                ref={inputRef}
            />
            <FeedbackPanel
                feedback={feedback}
                fontStyle={fontMap[mode]}
                mode={mode}
                targetText={targetText}
                value={value}
            />
        </div>
    );
};

export default TypingInput;
