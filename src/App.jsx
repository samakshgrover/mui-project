// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Header />
          hello
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
