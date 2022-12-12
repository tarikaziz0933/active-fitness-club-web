import './App.css';
import Accesories from './components/Accesories/Accesories';
import Answers from './components/Accesories/Answers/Answers';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Accesories></Accesories>
      <Answers></Answers>
    </div>
  );
}

export default App;
