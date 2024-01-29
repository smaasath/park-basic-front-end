
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
import Mybooking from './pages/MyBooingFlow/Mybooiking/Mybooking.js';
import ProfileEdit from "./pages/UserProfile/UserProfileEdit/ProfileEdit";
import UserProfile from "./pages/UserProfile/UserProfileDetails/UserProfile";
import UserBookings from './pages/MyBooingFlow/UserBookings/UserBookings.js';





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminBooking />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/AdminSlots" element={<AdminParkingSlots />} />


        {/*Thimira*/}


        <Route path="/ProfileEdit" element={<ProfileEdit />} />
        <Route path="/UserProfile" element={<UserProfile />} />

        <Route
          path="/AdminBookingDetails/:id"
          element={<AdminBookingDetail />}
        />
        <Route
          path="/AdminBookingDetails/"
          element={<AdminBooking />}
        />

        <Route
          path='/Booking'
          element={<BookingMain />}
        />
         <Route
          path='/Mybooking'
          element={<UserBookings />}
        />
         <Route
          path='/Mybooking/:id'
          element={<Mybooking />}
        />
        <Route
          path='/slot/'
          element={<BookingMain />}
        />

        <Route
          path='/slot/:id'
          element={<Slot />}
        />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </div>
  );
}

export default App;
