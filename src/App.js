import "./App.css";
import InputField from "./components/input-field/InputField";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HelpPage from "./components/help_page/HelpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <label>
        Name
        <input
          type="password"
          className="input-primary"
          placeholder="E.g. John Doe"
        ></input>
      </label>

      <InputField className="input-primary" type="text" />

      <Footer />
    </div>
  );
}

export default App;
