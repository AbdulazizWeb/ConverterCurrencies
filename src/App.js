import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import FirstPage from "./containers/FirstPage/FirstPage";
import SecondPage from './containers/SecondPage/SecondPage';
import Navigation from './components/Navigation/Navigation';


function App() {

  
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<FirstPage />}/>
          <Route path="lists" element={<SecondPage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
