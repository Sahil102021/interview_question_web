import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
import "./App.css";
import Home from "./Component/Page/Home";
import Header from './Component/Header/Header'
import Footer from "./Component/Footer/footer";
import Question from "./Component/Page/Question";
import SignupForm from "./Component/Page/SignupForm"
import toast, { Toaster } from 'react-hot-toast';
import About from "./Component/Page/About";
import Event from "./Component/Page/Event";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/event" element={<Event />}/>
          <Route path="/question/:id" element={<Question />}/>
          <Route path="/signupform" element={<SignupForm />}/>
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
