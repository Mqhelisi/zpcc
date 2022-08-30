import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router";
import Home from './components/Home';
import Contact from './components/Contact';
import {StyledButton, StyledSmallContainer} from './stylez'
import TenderV from './pages/TenderV';
import TendrUp from './pages/TendrUp';
// let routes = (
//   <Switch>
//     <Route exact path='/'>
//       <Home/>
//     </Route>
//     <Route exact path='/ab'>
//       <About/>
//     </Route>
//     <Route>
//       <NoMatch/>
//     </Route>
//   </Switch>
// )

function DoSomethin(a) {
  console.log('asdlnasndkasdklasmdlksamdlksamdklsamdklsam')
  return alert(a)
}




function App() {
  return (
    <>
    <TendrUp/>

    </>
//     <div className="App-header">
// <Home />
//       <Contact/>
//       <StyledButton bg = "black" type="button" onClick={()=> DoSomethin('somebajdksnjkndkjaddasnsadnksan')}>Login</StyledButton>
//       <StyledButton bg = "white" type="button" onClick={()=> DoSomethin('somen else')}>lovejoy msmsmsms</StyledButton>
   

//     </div>
  );
}

export default App;
