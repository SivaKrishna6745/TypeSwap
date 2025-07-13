import { useState } from 'react';
import './App.css';
import TextStream from './components/TextStream';
import MetricsPanel from './components/MetricsPanel';
import useTypingStats from './hooks/useTypingStats';
import TypingInput from './components/TypingInput';
import RestartButton from './components/RestartButton';
import typingData from './data/typingData';
import ModeSwitcher from './components/ModeSwitcher';

const getRandomTextByMode = (mode: 'quotes' | 'paragraphs' | 'codes') => {
    return typingData[mode][Math.floor(Math.random() * typingData[mode].length)];
};

function App() {
    const [mode, setMode] = useState<'quotes' | 'paragraphs' | 'codes'>('quotes');
    const [strictMode, setStrictMode] = useState<boolean>(false);
    const [startedTyping, setStartedTyping] = useState<boolean>(false);
    const [targetText, setTargetText] = useState(getRandomTextByMode(mode));
    const [userInput, setUserInput] = useState<string>('');
    const { wpm, accuracy, errors, elapsedTime, resetStats } = useTypingStats(targetText, userInput);
    const handleRestart = () => {
        setUserInput('');
        resetStats();
        setTargetText(getRandomTextByMode(mode));
    };
    const handleModeChange = (currMode: 'quotes' | 'paragraphs' | 'codes') => {
        setMode(currMode);
        setTargetText(getRandomTextByMode(currMode));
        setUserInput('');
        resetStats();
    };

    return (
        <div className={`mt-5 flex flex-col gap-8 justify-center items-center mode-${mode}`}>
            <h1 className="text-5xl text-white">Type Swap</h1>
            <hr className="w-full border-white" />
            <ModeSwitcher selectedMode={mode} onModeChange={handleModeChange} />
            <TextStream targetText={targetText} />
            <div className="flex justify-center items-center gap-2">
                <label htmlFor="strict" className="cursor-pointer" title="Once entered, no turning back...">
                    <div
                        className={`relative h-5 w-10 bg-gray-400 rounded-full ${
                            strictMode ? 'ring-2 ring-teal-500' : ''
                        } ${strictMode && startedTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
                        role="switch"
                        aria-checked={strictMode}
                    >
                        <div
                            className={`absolute h-4 w-4 top-0.5 rounded-full transition-all duration-300 ease-in-out ${
                                strictMode ? 'bg-gray-700 left-[calc(100%-1.25rem)] shadow-md' : 'bg-gray-600 left-1'
                            }`}
                        ></div>
                    </div>
                </label>
                <input
                    type="checkbox"
                    id="strict"
                    className="peer hidden"
                    onChange={() => setStrictMode(!strictMode)}
                    disabled={strictMode && startedTyping}
                />
                <label htmlFor="strict" className="cursor-pointer text-lg" title="Once entered, no turning back...">
                    🔒 Strict Mode (No Backspace)
                </label>
            </div>
            <TypingInput
                value={userInput}
                onChange={setUserInput}
                mode={mode}
                targetText={targetText}
                strict={strictMode}
                setStart={setStartedTyping}
            />
            <MetricsPanel wpm={wpm} accuracy={accuracy} errors={errors} elapsedTime={elapsedTime} />
            {userInput === targetText && <RestartButton onClick={handleRestart} />}
        </div>
    );
}

export default App;
