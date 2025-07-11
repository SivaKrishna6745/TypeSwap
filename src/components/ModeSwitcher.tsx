import React from 'react';
import typingData from '../data/typingData';

type ModeSwitcherProps = {
    selectedMode: 'quotes' | 'paragraphs' | 'codes';
    onModeChange: (value: 'quotes' | 'paragraphs' | 'codes') => void;
};

const ModeSwitcher = ({ selectedMode, onModeChange }: ModeSwitcherProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-4">
                <button className="bg-red-400 p-4 rounded-lg cursor-pointer" onClick={() => onModeChange('quotes')}>
                    Quotes
                </button>
                <button
                    className="bg-green-400 p-4 rounded-lg cursor-pointer"
                    onClick={() => onModeChange('paragraphs')}
                >
                    Paragraphs
                </button>
                <button className="bg-blue-400 p-4 rounded-lg cursor-pointer" onClick={() => onModeChange('codes')}>
                    Codes
                </button>
            </div>
        </div>
    );
};

export default ModeSwitcher;
