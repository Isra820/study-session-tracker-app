const FocusSelector = ({ subject, setSubject }) => {
  return (
    <div className="card">
      <h2>Choose Your Focus </h2>

      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="React">React</option>
        <option value="Java">Java</option>
        <option value="DSA">DSA</option>
        <option value="Networking">Networking</option>
        <option value="Web Development">Web Development</option>
      </select>

      <p className="focus-text">Current Focus: <strong>{subject}</strong></p>
    </div>
  );
};

export default FocusSelector;