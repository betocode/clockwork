import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../../presentation/pages";
import MakeHome from "../factories/pages/makeHome";
import MakeMovieDetail from "../factories/pages/makeMovieDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/moviedetail/:id" element={<MakeMovieDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
