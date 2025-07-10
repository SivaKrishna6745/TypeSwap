import React from 'react';

type TypingInputProps = {
    value: string;
    onChange: (value: string) => void;
};

const TypingInput = ({ value, onChange }: TypingInputProps) => {
    return (
        <div>
            <input
                type="text"
                className="w-full p-3 rounded-md border bg-neutral-100 focus:outline-none focus:ring"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Let your fingers speak…"
            />
        </div>
    );
};

export default TypingInput;
