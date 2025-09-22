import React from "react";
import TeacherPanel from "../components/TeacherPanel";
import StudentPanel from "../components/StudentPanel";

export default function Home() {
  return (
    <div className="home-grid">
      <TeacherPanel />
      <StudentPanel />
    </div>
  );
}
