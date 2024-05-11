import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { publicRoutes } from "./utilities/routes";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const Routes = () => {
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
    </ReactRoutes>
  );
};

export default Routes;
