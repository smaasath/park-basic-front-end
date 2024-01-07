import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './pages/HomeFlow/HomeMain/HomeMain';
import SignIn from './pages/authorization/SignIn/SignIn';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.js';






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
        <Route
          path='/admin'
          element={<AdminDashboard />}
        />
      </Routes>


    </div>

  );
}

export default App;
