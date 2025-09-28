import { ScrollText } from "lucide-react";
import React, { use } from "react";
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

const StudentMarksChart = ({ studentsPromise }) => {
  const studentsArray = use(studentsPromise);
  const studentData = studentsArray.data;
  console.log(studentData);

  return (
    <div className="my-c py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="w-full">
          <div className="flex items-center gap-3 text-green-500 px-2 mb-5">
            <span className="text-blue-600">
              <ScrollText></ScrollText>
            </span>
            <h1 className="md:text-3xl font-semibold">
              Final Year Result Chart (Line)
            </h1>
          </div>
          <div className="h-[300px] md:h-[300px] px-5 mt-0 md:mt-20">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={students}>
                <CartesianGrid
                  stroke="teal"
                  strokeDasharray="5 5"
                ></CartesianGrid>

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
                <XAxis dataKey="name" tick={{ fontSize: 12 }}></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Legend></Legend>
                <Legend></Legend>
                <Tooltip></Tooltip>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Second Chart */}

        <div className="w-full">
          <div className="flex items-center gap-3 text-teal-600 px-2 mb-5">
            <span className="text-blue-600">
              <ScrollText></ScrollText>
            </span>
            <h1 className="md:text-3xl font-semibold">
              Final Year Result Chart (Bar)
            </h1>
          </div>
          <div className="h-[300px] md:h-[300px] px-5 mt-30">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={students}>
                <CartesianAxis stroke=""></CartesianAxis>
                <XAxis
                  dataKey="name"
                  stroke="teal"
                  tick={{ fontSize: 12 }}
                ></XAxis>
                <YAxis></YAxis>

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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="w-full">
          <div className="flex items-center gap-3 text-teal-600 px-2 mb-5">
            <span className="text-blue-600">
              <ScrollText></ScrollText>
            </span>
            <h1 className="md:text-3xl font-semibold">
              Final Year Result Chart (Bar)
            </h1>
          </div>
          <div className="h-[300px] md:h-[300px] px-5 mt-30">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studentData}>
                <CartesianAxis stroke=""></CartesianAxis>
                <XAxis
                  dataKey="name"
                  stroke="teal"
                  tick={{ fontSize: 12 }}
                ></XAxis>
                <YAxis></YAxis>

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
                <Bar dataKey={"physics"} fill="OrangeRed" barSize={20}></Bar>
                <Bar dataKey={"chemistry"} fill="black" barSize={20}></Bar>
                <Bar dataKey={"math"} fill="Goldenrod" barSize={20}></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Second Chart */}
        <div className="w-full">
          <div className="flex items-center gap-3 text-green-500 px-2 mb-5">
            <span className="text-blue-600">
              <ScrollText></ScrollText>
            </span>
            <h1 className="md:text-3xl font-semibold">
              Final Year Result Chart (Line)
            </h1>
          </div>
          <div className="h-[300px] md:h-[300px] px-5 mt-0 md:mt-20">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentData}>
                <CartesianGrid
                  stroke="teal"
                  strokeDasharray="5 5"
                ></CartesianGrid>

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
                <XAxis dataKey="name" tick={{ fontSize: 12 }}></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Legend></Legend>
                <Legend></Legend>
                <Tooltip></Tooltip>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMarksChart;
