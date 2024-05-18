import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { publicRoutes, privateRoutes } from "./utilities/routes";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotels from "./pages/AddHotels";
import { useAppContext } from "./contexts/AppContext";

const Routes = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <ReactRoutes>
      <Route
        path={publicRoutes.landing}
        element={
          <Layout>
            <p>Home page</p>
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
            path={privateRoutes.AddHotels}
            element={
              <Layout>
                <AddHotels/>
              </Layout>
            }
          />
        </>
      )}
    </ReactRoutes>
  );
};

export default Routes;
