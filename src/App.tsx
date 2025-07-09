import { useState } from 'react';
import './App.css';
import TextStream from './components/TextStream';

function App() {
    return (
        <div className="flex justify-center">
            <TextStream targetText="siva" userInput="siva" />
        </div>
    );
}

export default App;
