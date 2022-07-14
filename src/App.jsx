// import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/services" element={<div>services</div>} />
            <Route path="/softwares" element={<div>custom softwares</div>} />
            <Route path="/mobileapps" element={<div>mobile apps</div>} />
            <Route path="/websites" element={<div>websites</div>} />
            <Route path="/revolution" element={<div>revolution</div>} />
            <Route path="/about" element={<div>about</div>} />
            <Route path="/contect" element={<div>contect</div>} />
            <Route path="/estimate" element={<div>estimate</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
