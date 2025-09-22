import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTeacher, resetTeacher } from "../store/teacherSlice";
import EditModal from "./EditModal";

export default function TeacherPanel() {
  const teacher = useSelector((s) => s.teacher.data);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSave = (payload) => {
    if (payload.age) payload.age = Number(payload.age);
    dispatch(updateTeacher(payload));
    setOpen(false);
  };

  return (
    <section className="panel">
      <h2>Teacher</h2>
      <div className="card">
        <p><b>Name:</b> {teacher.name}</p>
        <p><b>Subject:</b> {teacher.subject}</p>
        <p><b>Age:</b> {teacher.age}</p>
        <p><b>Email:</b> {teacher.email}</p>
        <p><b>Qualification:</b> {teacher.qualification}</p>
        <div className="btns">
          <button onClick={() => setOpen(true)}>Change Data</button>
          <button onClick={() => dispatch(resetTeacher())}>Default Data</button>
        </div>
      </div>

      {open && (
        <EditModal
          initialData={teacher}
          onClose={() => setOpen(false)}
          onSave={handleSave}
        />
      )}
    </section>
  );
}
