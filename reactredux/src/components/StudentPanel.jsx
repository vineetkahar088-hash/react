import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent, resetStudent } from "../store/studentSlice";
import EditModal from "./EditModal";

export default function StudentPanel() {
  const student = useSelector((s) => s.student.data);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSave = (payload) => {
    if (payload.age) payload.age = Number(payload.age);
    dispatch(updateStudent(payload));
    setOpen(false);
  };

  return (
    <section className="panel">
      <h2>Student</h2>
      <div className="card">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Roll:</b> {student.roll}</p>
        <p><b>Age:</b> {student.age}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Qualification:</b> {student.qualification}</p>
        <div className="btns">
          <button onClick={() => setOpen(true)}>Change Data</button>
          <button onClick={() => dispatch(resetStudent())}>Default Data</button>
        </div>
      </div>

      {open && (
        <EditModal
          initialData={student}
          onClose={() => setOpen(false)}
          onSave={handleSave}
        />
      )}
    </section>
  );
}
