import './App.css';
import { Biznesplan } from './Biznesplan';

function App() {
  return (
    <div className="App">
      <div className='Appmin'>
      <h1>Список дел</h1>
      <h5 className='ullustration'>Для добавления дела впишите его в поле ввода и нажмите кнопку "Добавить" или клавишу Enter.</h5>
      <Biznesplan/>
      <p>Клик по выбранному делу зачеркнет его, а повторный клик - уберет зачеркивание. Двойным кликом можно убрать только одно дело, а не весь список. </p>
      </div>
    </div>
  );
}

export default App;
