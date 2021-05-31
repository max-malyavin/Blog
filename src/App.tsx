import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { SignIn } from "./components/pages/SignIn";
import { SignUp } from "./components/pages/SignUp";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="*" to="/" />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
