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
    const [targetText, setTargetText] = useState(getRandomTextByMode(mode));
    const [userInput, setUserInput] = useState<string>('');
    const { wpm, accuracy, errors, isFinished, elapsedTime, resetStats } = useTypingStats(targetText, userInput);
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
            <TextStream targetText={targetText} userInput={userInput} />
            <div className="flex justify-center items-center gap-2">
                <input type="checkbox" id="strict" onChange={() => setStrictMode(!strictMode)} />
                <label htmlFor="strict" title="No backspace. Every keystroke counts.">
                    🔒 Strict Mode (No Backspace)
                </label>
            </div>
            <TypingInput
                value={userInput}
                onChange={setUserInput}
                mode={mode}
                targetText={targetText}
                strict={strictMode}
            />
            <MetricsPanel wpm={wpm} accuracy={accuracy} errors={errors} elapsedTime={elapsedTime} />
            {userInput === targetText && <RestartButton onClick={handleRestart} />}
        </div>
    );
}

export default App;
