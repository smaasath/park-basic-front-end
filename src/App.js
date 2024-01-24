import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './pages/HomeFlow/HomeMain/HomeMain.js';
import SignIn from './pages/authorization/SignIn/SignIn.js';
import SignUp from './pages/authorization/SignUp/SignUp.js';
import ProfilePage from './pages/ProfileFlow/ProfilePage/ProfilePage.js';
import AdminBooking from './pages/AdminDashboard/AdminBooking/AdminBooking.js';
import AdminParkingSlots from './pages/AdminDashboard/ParkingSlots/AdminParkingSlots.js';
import Mybooking from './pages/MyBooingFlow/Mybooking/Mybooking.js';



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
          element={<AdminBooking />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />

        <Route
          path='/AdminSlots'
          element={<AdminParkingSlots />}
        />


        <Route
          path='/profile'
          element={<ProfilePage />}
        />
           <Route
          path='/Mybooking'
          element={<Mybooking />}
        />
      </Routes>


    </div>

  );
}

export default App;
