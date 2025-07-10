import { useState } from 'react';
import './App.css';
import TextStream from './components/TextStream';
import MetricsPanel from './components/MetricsPanel';
import useTypingStats from './hooks/useTypingStats';
import TypingInput from './components/TypingInput';
import RestartButton from './components/RestartButton';
import typingData from './data/typingData';

const getRandomText = () => {
    return typingData[Math.floor(Math.random() * typingData.length)];
};

function App() {
    const [targetText, setTargetText] = useState(getRandomText());
    const [userInput, setUserInput] = useState('');
    const { wpm, accuracy, errors, isFinished, elapsedTime, resetStats } = useTypingStats(targetText, userInput);
    const handleRestart = () => {
        setUserInput('');
        resetStats();
        setTargetText(getRandomText());
    };

    return (
        <div className="flex flex-col gap-8 justify-center items-center">
            <TextStream targetText={targetText} userInput={userInput} />
            <TypingInput value={userInput} onChange={setUserInput} />
            <MetricsPanel wpm={wpm} accuracy={accuracy} errors={errors} elapsedTime={elapsedTime} />
            {userInput === targetText && <RestartButton onClick={handleRestart} />}
        </div>
    );
}

export default App;
