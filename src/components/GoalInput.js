const GoalInput = ({ goal , setGoal}) => {
    return(
        <div className="card">
            <h2>Set Your Daily Goal 🎯</h2>
            <input type="number" value={goal} onChange={(e)=>{setGoal(Number(e.target.value))}} min="1" />
        </div>
    );
};

export default GoalInput;