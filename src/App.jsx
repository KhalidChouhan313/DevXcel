import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { web_routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {web_routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
