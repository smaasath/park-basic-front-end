import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './pages/HomeFlow/HomeMain/HomeMain';


function App() {
  return (

    <div>
      <Routes>
        <Route
          path='/' 
          element={<HomeMain />}
        />
      </Routes>
      
      
    </div>
  );
}

export default App;
