import React from 'react';
import MetricBox from './MetricBox';

type MetricsPanelProps = {
    wpm: number;
    accuracy: number;
    errors: number;
    elapsedTime: number;
};

const MetricsPanel = ({ wpm, accuracy, errors, elapsedTime }: MetricsPanelProps) => {
    return (
        <div className="flex flex-wrap">
            <MetricBox label={'🧠 Speed:'} value={wpm} color="green" />
            <MetricBox label={'🎯 Accuracy:'} value={accuracy} color="blue" />
            <MetricBox label={'❌ Number of errors:'} value={errors} color="red" />
            <MetricBox label={'Elapsed Time:'} value={elapsedTime} color="gray" />
        </div>
    );
};

export default MetricsPanel;
