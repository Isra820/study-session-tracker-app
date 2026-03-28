const ProgressMessage = ({ count, goal, subject }) => {
    let message = "";

    if (count === 0) {
    message = `Let’s start studying ${subject} 💪`;
    } else if (count < goal / 2) {
    message = `Good start in ${subject} 🚀`;
    } else if (count < goal) {
    message = `You’re doing great in ${subject} 🔥`;
    } else {
    message = `Goal achieved in ${subject} 🎉`;
    }

    const percentage = Math.min((count / goal) * 100, 100);

    return(
        <div className="card">
            <h2>Progress</h2>
            <p> {count} / {goal} sessions completed</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
             <p>{Math.round(percentage)}% completed</p>
            <h3>{message}</h3>
        </div>
    );
};

export default ProgressMessage;