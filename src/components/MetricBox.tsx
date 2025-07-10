import React from 'react';

type MetricBoxProps = {
    label: string;
    value: number;
};

const MetricBox = ({ label, value }: MetricBoxProps) => {
    return (
        <div className="bg-amber-200 mx-4 p-4 rounded-lg text-xl">
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
};

export default MetricBox;
