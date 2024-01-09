import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage";
import Contact from "./components/contact";
import About from "./pages/aboutPage";
import ComingSoon from "./pages/comingSoon";
import Event from "./pages/eventPage";
import LeadPage from "./pages/leadPage";
import Form from "./pages/form";
import Empty from "./components/empty";
import ScrollItToTop from "./components/ScrollToTop";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("../service-worker.js").then(
            function (registration) {
                // Registration was successful
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            }
        );
    });
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollItToTop/>
          <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/event" element={<Event/>}/>
              <Route path="/lead" element={<LeadPage/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/contact" element={<Empty/>}/>
              <Route path="/comingsoon" element={<ComingSoon/>}/>
            </Routes>
          <Contact/>
      </BrowserRouter>
    </>
  )
}