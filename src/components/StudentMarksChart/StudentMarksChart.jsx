import { ScrollText } from 'lucide-react';
import React from 'react';
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
const students = [
  {
    name: "Alice Kumar",
    physics: 85,
    chemistry: 78,
    math: 92
  },
  {
    name: "Rohan Singh",
    physics: 74,
    chemistry: 88,
    math: 81
  },
  {
    name: "Meera Patel",
    physics: 91,
    chemistry: 95,
    math: 89
  },
  {
    name: "Arjun Das",
    physics: 67,
    chemistry: 72,
    math: 70
  },
  {
    name: "Sneha Roy",
    physics: 88,
    chemistry: 84,
    math: 93
  }
];


const StudentMarksChart = () => {
    return (
        <div className='my-c py-10'>
            <div className='flex gap-2 items-center text-green-500'>
                <span className='text-blue-600'> <ScrollText></ScrollText> </span>
            <h1 className='text-3xl font-semibold p-5'>Final Year Result Chart</h1>
            </div>
            <LineChart width={700} height={400} data={students}>
                <CartesianGrid></CartesianGrid>
                {/* <CartesianAxis></CartesianAxis> */}
                <Line dataKey="physics" stroke='tomato'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
                <Line dataKey="math" stroke='green'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Legend></Legend>
                <Legend></Legend>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default StudentMarksChart;