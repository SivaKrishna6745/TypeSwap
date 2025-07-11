import React from 'react';

type ModeSwitcherProps = {
    selectedMode: 'quotes' | 'paragraphs' | 'codes';
    onModeChange: (value: 'quotes' | 'paragraphs' | 'codes') => void;
};

const buttonClassNames =
    'p-4 rounded-lg cursor-pointer hover:scale-110 hover:shadow-lg hover:text-white/90 transition-all duration-200';

const ModeSwitcher = ({ selectedMode, onModeChange }: ModeSwitcherProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-8">
                <button
                    className={`bg-red-400 hover:bg-red-600/80 ${buttonClassNames}`}
                    onClick={() => onModeChange('quotes')}
                >
                    Quotes
                </button>
                <button
                    className={`bg-green-400 hover:bg-green-600/80 ${buttonClassNames}`}
                    onClick={() => onModeChange('paragraphs')}
                >
                    Paragraphs
                </button>
                <button
                    className={`bg-blue-400 hover:bg-blue-600/80 ${buttonClassNames}`}
                    onClick={() => onModeChange('codes')}
                >
                    Codes
                </button>
            </div>
        </div>
    );
};

export default ModeSwitcher;
