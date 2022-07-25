import "./App.css";
import Button from "./components/button";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <hr/>
      <Button />
    </ThemeProvider>
  );
}

export default App;
