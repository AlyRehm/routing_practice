
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Other from './components/Other';

function App() {
  return(
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/home"/>
        {/* Do not want to hard route these routes as the person can input any word or colors to make things happen. This is where we use the :  */}
        <Route element={<Other />} path='/:word' />
        <Route element={<Other />} path='/:word/:color/:bgColor' />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
