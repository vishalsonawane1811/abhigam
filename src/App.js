import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Friends } from './components/Friends'
import { AboutMe } from "./components/AboutMe/AboutMe";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='friends' element={<Friends />} />
        <Route path='aboutme' element={<AboutMe />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
