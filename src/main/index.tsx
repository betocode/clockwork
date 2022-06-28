import React from "react";

import Home from "../presentation/pages/home";
import MakeMovieFilterContext from "./factories/context/makeMovieFilterProvider";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <MakeMovieFilterContext>
      <AppRoutes />
    </MakeMovieFilterContext>
  );
}

export default App;
