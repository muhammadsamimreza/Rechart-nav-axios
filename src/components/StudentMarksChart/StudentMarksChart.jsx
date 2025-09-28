import { ScrollText } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const students = [
  {
    name: "Alice",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    name: "Rohan",
    physics: 74,
    chemistry: 88,
    math: 81,
  },
  {
    name: "Meera",
    physics: 91,
    chemistry: 95,
    math: 89,
  },
  {
    name: "Arjun",
    physics: 67,
    chemistry: 72,
    math: 70,
  },
  {
    name: "Sneha",
    physics: 88,
    chemistry: 84,
    math: 93,
  },
];


const StudentMarksChart = () => {
  return (
    <div className="my-c py-10">
      <div className="flex gap-2 items-center text-green-500">
        <span className="text-blue-600">
          {" "}
          <ScrollText></ScrollText>{" "}
        </span>
        <h1 className="text-3xl font-semibold p-5">Final Year Result Chart</h1>
      </div>
     <div className="md:flex justify-between gap-5 ">
         <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] mx-5">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={students}>
        <CartesianGrid stroke="teal" strokeDasharray="5 5"></CartesianGrid>
        {/* <CartesianAxis></CartesianAxis> */}
        <Line
          type="monotone"
          strokeWidth={1}
          dataKey="physics"
          stroke="tomato"
        ></Line>
        <Line
          type="monotone"
          strokeWidth={1}
          dataKey="chemistry"
          stroke="blue"
        ></Line>
        <Line
          type="monotone"
          strokeWidth={1}
          dataKey="math"
          stroke="black"
        ></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        <Legend></Legend>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full lg:w-1/2 h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={students}>
        <CartesianAxis stroke=""></CartesianAxis>
        <XAxis dataKey="name" stroke="teal"></XAxis>
        <YAxis></YAxis>
        {/* <Legend></Legend>
                <Legend></Legend>
                <Legend></Legend> */}
        <Legend
          width={100}
          wrapperStyle={{
            width: 130,
            top: -100,
            left: 70,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "20px",
            padding: "2px",
          }}
        />
        <Tooltip></Tooltip>
        <Bar dataKey={"physics"} fill="green" barSize={20}></Bar>
        <Bar dataKey={"chemistry"} fill="blue" barSize={20}></Bar>
        <Bar dataKey={"math"} fill="tomato" barSize={20}></Bar>
      </BarChart>
        </ResponsiveContainer>
      </div>
     </div>
    </div>
  );
};

export default StudentMarksChart;
