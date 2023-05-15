import React from "react"
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/settings/Settings.jsx";
import PrivateRoute from "./components/PrivateRouter.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/profile' element={<PrivateRoute />}>
            <Route exact path='/profile' element={<Profile />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
