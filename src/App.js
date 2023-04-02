import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";
import TabsShowDetails from "./components/Tabs/TabsShowDetails";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import Report from "./components/Report/Report";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

import {
  Routes,
  Route,
  Link,
  useSearchParams,
  Navigate,
} from "react-router-dom";
import AddDetails from "./components/AddDetails/AddDetails";
import { AppRoutes } from "./common.constants";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginCheck = () => {
    const isLoggedIn = true;
    setLoggedIn(isLoggedIn); // Login check logic to be added here
    return isLoggedIn;
  };

  const componentAuthCheck = (comp, navigateTo) => {
    const isLoggedIn = loginCheck();
    return isLoggedIn ? (
      navigateTo ? (
        <Navigate to={navigateTo} />
      ) : (
        comp
      )
    ) : (
      <Navigate to="/auth" />
    );
  };

  return (
    <div className="App">
      <SideNav />
      <div className="main-container">
        <Header />
        <div className="workspace-container">
          <Routes>
            <Route
              path={AppRoutes.Dashboard}
              exact
              element={componentAuthCheck(<Dashboard />, undefined)}
            />
            <Route path={AppRoutes.AddDetails} exact element={<AddDetails />} />
            <Route
              path={AppRoutes.ShowDetails}
              exact
              element={componentAuthCheck(<ShowDetails />, undefined)}
            />
            <Route
              path={AppRoutes.Report}
              exact
              element={componentAuthCheck(<Report />, undefined)}
            />
            <Route
              path={AppRoutes.Profile}
              exact
              element={componentAuthCheck(<Profile />, undefined)}
            />
            <Route path={AppRoutes.Auth} exact element={<Login />} />
          </Routes>
          {/* <AddDetails /> 
        <Route
              exact
              path="/"
              element={componentAuthCheck(undefined, "/dashboard")}
            ></Route>*/}
          {/* <ShowDetails /> */}

          {/* <TabsShowDetails /> 
        {/* <Profile />*/}
          <Dashboard />
          {/* <Login /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
