import React from 'react';

type MetricBoxProps = {
    label: string;
    value: number;
};

const MetricBox = ({ label, value }: MetricBoxProps) => {
    return (
        <div
            className="bg-white/10 backdrop-blur-sm border border-white/10
 mx-4 p-4 rounded-lg text-xl"
        >
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
};

export default MetricBox;
