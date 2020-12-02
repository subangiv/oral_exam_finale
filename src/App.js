import "./App.css";
import InputField from "./components/input-field/InputField";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
