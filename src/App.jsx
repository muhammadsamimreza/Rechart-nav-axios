import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import StudentMarksChart from "./components/StudentMarksChart/StudentMarksChart";
import { Suspense } from "react";

const studentsPromise = axios("students.json");
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<h1>Loading.........</h1>}>
        <StudentMarksChart
          studentsPromise={studentsPromise}
        ></StudentMarksChart>
      </Suspense>
    </div>
  );
}

export default App;
