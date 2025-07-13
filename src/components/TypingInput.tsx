import React, { useEffect, useRef, useState } from 'react';
import FeedbackPanel from './FeedbackPanel';

type Mode = 'quotes' | 'paragraphs' | 'codes';
type TypingInputProps = {
    value: string;
    onChange: (value: string) => void;
    mode: Mode;
    targetText: string;
    strict: boolean;
    setStart: (value: boolean) => void;
};

const caretColorMap: Record<Mode, string> = {
    quotes: 'caret-red-500',
    paragraphs: 'caret-green-500',
    codes: 'caret-blue-500',
};

const bkspRingColorMap: Record<Mode, string> = {
    quotes: 'ring-red-500',
    paragraphs: 'ring-green-500',
    codes: 'ring-blue-500',
};

const fontMap: Record<Mode, string> = {
    quotes: 'font-serif',
    paragraphs: 'font-sans',
    codes: 'font-mono',
};

const TypingInput = ({ value, onChange, mode, targetText, strict, setStart }: TypingInputProps) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [bkspClicked, setBkspClicked] = useState<boolean>(false);
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
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
        if (e.target.value !== '') setStart(true);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e?.key === 'Backspace' && strict) {
            e.preventDefault();
            setBkspClicked(true);
            setTimeout(() => {
                setBkspClicked(false);
            }, 500);
        }
    };

    return (
        <div className="relative max-w-screen flex flex-col items-center">
            {strict && bkspClicked && (
                <span className="absolute strict-pill px-1.5 py-0.5 bg-pink-50 rounded-full border border-pink-500 text-pink-500 shadow-sm text-sm">
                    🚫 Backspace disabled
                </span>
            )}
            <textarea
                rows={3}
                className={`bg-transparent w-4xl h-full p-3 rounded-md resize-none border focus:outline-none cursor-text transition-all duration-300 ${
                    caretColorMap[mode]
                } ${fontMap[mode]} ${bkspClicked ? `ring-2 ${bkspRingColorMap[mode]}` : ''}`}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Let your fingers speak…"
                ref={inputRef}
            />
            <FeedbackPanel feedback={feedback} fontStyle={fontMap[mode]} targetText={targetText} value={value} />
        </div>
    );
};

export default TypingInput;
