import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import Contact from "./components/contact";
import About from "./pages/aboutPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Contact/>
      </BrowserRouter>
    </>
  )
}