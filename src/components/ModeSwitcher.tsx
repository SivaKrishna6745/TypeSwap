type Mode = 'quotes' | 'paragraphs' | 'codes';
type ModeSwitcherProps = {
    selectedMode: Mode;
    onModeChange: (value: 'quotes' | 'paragraphs' | 'codes') => void;
};

const ModeColorMap: Record<Mode, string> = {
    quotes: 'peer-checked:ring-indigo-400',
    paragraphs: 'peer-checked:ring-slate-400',
    codes: 'peer-checked:ring-pink-400',
};

const radioButtonLabelClassNames =
    'text-xl text-white px-4 py-2 font-semibold rounded-full transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-md';

const ModeSwitcher = ({ selectedMode, onModeChange }: ModeSwitcherProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-white text-center mb-4">Select a Mode to test your Typing Skills</h2>
            <div className="flex gap-4">
                <div>
                    <input
                        type="radio"
                        value={'quotes'}
                        name="mode"
                        id="quotes"
                        checked={selectedMode === 'quotes'}
                        onChange={() => onModeChange('quotes')}
                        className="peer hidden"
                    />
                    <label
                        htmlFor="quotes"
                        className={`${radioButtonLabelClassNames} ${ModeColorMap[selectedMode]} peer-checked:ring-4 bg-indigo-700 hover:bg-indigo-600`}
                    >
                        💬 Quotes
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value={'paragraphs'}
                        name="mode"
                        id="paragraphs"
                        checked={selectedMode === 'paragraphs'}
                        onChange={() => onModeChange('paragraphs')}
                        className="peer hidden"
                    />
                    <label
                        htmlFor="paragraphs"
                        className={`${radioButtonLabelClassNames} ${ModeColorMap[selectedMode]} peer-checked:ring-4 bg-slate-700 hover:bg-slate-600`}
                    >
                        📄 Paragraphs
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value={'codes'}
                        name="mode"
                        id="codes"
                        checked={selectedMode === 'codes'}
                        onChange={() => onModeChange('codes')}
                        className="peer hidden"
                    />
                    <label
                        htmlFor="codes"
                        className={`${radioButtonLabelClassNames} ${ModeColorMap[selectedMode]} peer-checked:ring-4 bg-pink-800 hover:bg-pink-700`}
                    >
                        💻 Codes
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ModeSwitcher;
