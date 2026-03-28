import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import FocusSelector from './components/FocusSelector';
import CounterCard from './components/CounterCard';
import GoalInput from './components/GoalInput';
import ProgressMessage from './components/ProgressMessage';
import Footer from './components/Footer';

function App() {
  const [count, setCount] =useState(0);
  const [goal, setGoal] = useState(5);
  const [subject, setSubject] = useState("React");

  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  const reset = () => setCount(0);
  return (
    <div className="app">
      <Header />

      <FocusSelector subject={subject} setSubject={setSubject} />

      <CounterCard current={count} increase={increase}decrease={decrease} reset={reset} />

      <GoalInput goal={goal} setGoal={setGoal} />

      <ProgressMessage count={count} goal={goal} subject={subject} />

      <Footer />
    </div> 
  );
}

export default App;
