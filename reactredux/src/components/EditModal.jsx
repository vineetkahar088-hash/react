import React, { useState } from "react";

export default function EditModal({ initialData, onClose, onSave }) {
  const [form, setForm] = useState({ ...initialData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit</h3>
        <form onSubmit={handleSubmit} className="edit-form">
          {Object.keys(initialData).map((key) => (
            <div className="form-row" key={key}>
              <label>{key}</label>
              <input
                name={key}
                value={form[key] ?? ""}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
