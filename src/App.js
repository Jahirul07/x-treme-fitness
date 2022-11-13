import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Workouts from './components/Workouts/Workouts'

function App() {
  return (
    <div>
      <Header></Header>
      <Workouts></Workouts>
      <Questions></Questions>
    </div>
  );
}

export default App;
