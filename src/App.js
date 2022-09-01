import './App.css';
import BasicNavbar from './components/Navbar';
import BasicExample from './components/BasicForm';
import AddProj from './pages/AddProj';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Home from './pages/HomePr'
// import NumberList from './components/Listers'
import HomeTnd from './pages/HomeTnd';
import AddTnd from './pages/AddTnd';
import TendrUp from './pages/TendrUp';
import TenderV from './pages/TenderV';


function App() {
  return (
    <>
    <BasicNavbar/>

<BrowserRouter>
      <Routes>
        
          <Route path="/home" element={<Home/>} />
          <Route path="/homet" element={<HomeTnd/>} />
          <Route path="/tndrup" element={<TendrUp/>}/>
          <Route path="/addp" element={<AddProj />} />
          <Route path="/addt" element={<AddTnd />} />
          <Route path="/viewt" element={<TenderV />} />


          <Route path="*" element={<NoPage />} />
     
      </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App;
