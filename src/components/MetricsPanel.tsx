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
            <MetricBox label={'🧠 Speed:'} value={wpm} />
            <MetricBox label={'🎯 Accuracy:'} value={accuracy} />
            <MetricBox label={'❌ Number of errors:'} value={errors} />
            <MetricBox label={'Elapsed Time:'} value={elapsedTime} />
        </div>
    );
};

export default MetricsPanel;
