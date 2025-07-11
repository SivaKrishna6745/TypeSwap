import React from 'react';

type MetricBoxProps = {
    label: string;
    value: number;
    color: 'red' | 'green' | 'blue' | 'gray';
};

const bgColorMap = {
    red: 'bg-red-300',
    green: 'bg-green-300',
    blue: 'bg-blue-300',
    gray: 'bg-gray-300',
};

const MetricBox = ({ label, value, color }: MetricBoxProps) => {
    return (
        <div className={`${bgColorMap[color]} mx-4 p-4 rounded-lg text-xl`}>
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
};

export default MetricBox;
