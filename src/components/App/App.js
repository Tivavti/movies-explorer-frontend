import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";

function App() {
  const [isSideMenuOpen, setSideMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  function closeSideMenu() {
    setSideMenuOpen(false);
  };
  function handleSideMenuClick() {
    setSideMenuOpen(true);
  };
  return (
    <div className="app">
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/" element={
          <>
            <Header
              onSideMenu={handleSideMenuClick}
              isLoggedIn={isLoggedIn}
            />
            <Main />
            <Footer />
          </>
        }></Route>
        <Route exact path="/movies" element={<Movies
          onSideMenu={handleSideMenuClick}
        />} />
        <Route exact path="/saved-movies" element={<SavedMovies
          onSideMenu={handleSideMenuClick}
        />} />
        <Route exact path="/profile" element={<Profile
          onSideMenu={handleSideMenuClick}
        />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        onSideMenuClose={closeSideMenu}
      />
    </div>
  );
}

export default App;
