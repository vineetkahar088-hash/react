

import "./Hobby.css";

function Hobby() {
  const hobbies = ["Reading", "Coding", "Traveling", "Gaming"];

  return (
    <div className="hobby-container">
      <h2 className="hobby-heading">My Hobbies</h2>
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobby;
