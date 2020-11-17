import './App.css';
import InputField from './components/input-field/InputField'

function App() {
  return (
    <div className="App">
        <h1 className="primary-text">Hola</h1>
        <button className="btn rounded btn-primary label btn-disabled">Button</button>
        <button className="btn rounded btn-primary outlined">Button</button>
        <button className="btn rounded btn-donate">Button</button>
        <label>
          Name
        <input type="password" className="input-primary" placeholder="E.g. John Doe"></input>
        </label>

      <InputField className="input-primary" type="text"/>

    </div>
  );
}

export default App;
