import './App.css';
import NavExample from './Component/Navbar';
import Home from './Component/Home';
import Features from './Component/Features';
import Testimonials from './Component/section';
import Footer from './Component/footer';
import CallToAction from './Component/calltosecton';
import SubmissionsTable from "./Component/SubmissionsTable";
import { useState } from 'react';

function App() {
  const [submissions, setSubmissions] = useState([]); // State for table data

  return (
    <div className="App">
      <NavExample />
      <Home submissions={submissions} setSubmissions={setSubmissions} />
      <Testimonials/>
      <Features/>
      <CallToAction/>
      <SubmissionsTable submissions={submissions} />
      <Footer/>
    </div>
  );
}

export default App;
