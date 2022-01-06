import './App.css';
import { Biznesplan } from './Biznesplan';

function App() {
  return (
    <div className="App">
      <div className='Appmin'>
      <h1>Список дел</h1>
      <h5 className='ullustration'>Для добавления дела впишите его в поле ввода и нажмите кнопку "Добавить" или клавишу Enter.</h5>
      <Biznesplan/>
      </div>
    </div>
  );
}

export default App;
