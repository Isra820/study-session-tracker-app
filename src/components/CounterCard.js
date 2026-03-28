const CounterCard =({current,increase,decrease,reset})=>{
    return(
        <div className="card">
            <h2>Study Completed Today</h2>
            <h1 className="counter">{current}</h1>

            <div className="buttons">
                <button className="button" onClick={increase}>+</button>
                <button className="button" onClick={decrease}>-</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default CounterCard;