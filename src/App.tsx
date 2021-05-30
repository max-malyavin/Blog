import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { SignIn } from "./components/pages/SignIn";
import { SignUp } from "./components/pages/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="*" to="/" />
      </BrowserRouter>
    </div>
  );
};

export default App;
