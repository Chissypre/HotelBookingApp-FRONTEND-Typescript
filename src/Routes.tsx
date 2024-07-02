import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { publicRoutes, privateRoutes } from "./utilities/routes";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotels from "./pages/AddHotels";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import HotelDetail from "./pages/HotelDetail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";

const Routes = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <ReactRoutes>
      <Route
        path={publicRoutes.landing}
        element={
          <Layout>
            <Home/>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/detail/:hotelId"
        element={
          <Layout>
            <HotelDetail />
          </Layout>
        }
      />
      <Route
        path={publicRoutes.register}
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path={publicRoutes.login}
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />

      {isLoggedIn && (
        <>
          <Route
            path="/hotel/:hotelId/booking"
            element={
              <Layout>
                <Booking />
              </Layout>
            }
          />

          <Route
            path={privateRoutes.AddHotels}
            element={
              <Layout>
                <AddHotels />
              </Layout>
            }
          />
          <Route
            path={privateRoutes.MyHotels}
            element={
              <Layout>
                <MyHotels />
              </Layout>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <Layout>
                <MyBookings />
              </Layout>
            }
          />
          <Route
            path="/edit-hotel/:hotelId"
            element={
              <Layout>
                <EditHotel />
              </Layout>
            }
          />
        </>
      )}
    </ReactRoutes>
  );
};

export default Routes;
