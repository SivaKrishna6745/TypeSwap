import React from 'react';

type TypingInputProps = {
    value: string;
    onChange: (value: string) => void;
};

const TypingInput = ({ value, onChange }: TypingInputProps) => {
    return (
        <div className="w-2xl">
            <textarea
                rows={3}
                className="w-full h-full p-3 rounded-md resize-none border bg-neutral-100 focus:outline-none focus:ring-blue-400"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Let your fingers speak…"
            />
        </div>
    );
};

export default TypingInput;
