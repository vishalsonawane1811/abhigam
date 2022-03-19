import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Friends } from './components/Friends'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/friends" element={<Friends />} />


    </Routes>

  );
}

export default App;
