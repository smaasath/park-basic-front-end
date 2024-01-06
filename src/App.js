import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './pages/HomeFlow/HomeMain/HomeMain';
import SignIn from './pages/authorization/SignIn/SignIn';



function App() {
  return (

    <div>
      <Routes>
        <Route
          path='/'
          element={<HomeMain />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
      </Routes>


    </div>
  );
}

export default App;
