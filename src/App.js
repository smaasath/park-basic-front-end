
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './pages/HomeFlow/HomeMain/HomeMain.js';
import SignIn from './pages/authorization/SignIn/SignIn.js';
import SignUp from './pages/authorization/SignUp/SignUp.js';
import ProfilePage from './pages/ProfileFlow/ProfilePage/ProfilePage.js';
import AdminBooking from './pages/AdminDashboard/AdminBooking/AdminBooking.js';
import AdminParkingSlots from './pages/AdminDashboard/ParkingSlots/AdminParkingSlots.js';
import BookingMain from './pages/HomeFlow/BookingMain/BookingMain.js';
import Slot from './pages/HomeFlow/BookingMain/BookingSlot/BookingSlot.js';
import AdminBookingDetail from "./pages/AdminDashboard/AdminBookingDetail/AdminBookingDetail.js";
import Mybooking from './pages/MyBooingFlow/Mybooking/Mybooking.js';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminBooking />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/AdminSlots" element={<AdminParkingSlots />} />

        <Route
          path="/AdminBookingDetails"
          element={<AdminBookingDetail />}
        />

        <Route
          path='/Booking'
          element={<BookingMain />}
        />
        <Route
          path='/slot'
          element={<Slot />}
        />

           <Route
          path='/Mybooking'
          element={<Mybooking />}
        />

        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </div>
  );
}

export default App;
