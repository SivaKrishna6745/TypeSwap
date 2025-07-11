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
            <h2 className="text-2xl text-white">Select a Mode to start typing</h2>
            <div className="flex gap-4">
                <label className="text-xl text-white flex gap-2">
                    <input
                        type="radio"
                        value={'quotes'}
                        name="mode"
                        checked={selectedMode === 'quotes'}
                        onChange={() => onModeChange('quotes')}
                    />
                    Quotes
                </label>
                <label className="text-xl text-white flex gap-2">
                    <input
                        type="radio"
                        value={'paragraphs'}
                        name="mode"
                        checked={selectedMode === 'paragraphs'}
                        onChange={() => onModeChange('paragraphs')}
                    />
                    Paragraphs
                </label>
                <label className="text-xl text-white flex gap-2">
                    <input
                        type="radio"
                        value={'codes'}
                        name="mode"
                        checked={selectedMode === 'codes'}
                        onChange={() => onModeChange('codes')}
                    />
                    Codes
                </label>
            </div>
        </div>
    );
};

export default ModeSwitcher;
