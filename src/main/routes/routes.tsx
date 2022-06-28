import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieFilterContext from "../../presentation/context/movieFilterContext";
import { MovieDetail } from "../../presentation/pages";
import MakeHome from "../factories/pages/makeHome";
import MakeMovieDetail from "../factories/pages/makeMovieDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/moviedetail/:id" element={<MakeMovieDetail />} />
        <Route path="*" element={<MyComponent text={"not found"} />} />
        <Route path="/" element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  );
};

type Props = {
  text: string;
};
const MyComponent: React.FC<Props> = ({ text }: { text: string }) => {
  const ctx = useContext(MovieFilterContext);

  return <div>{text}</div>;
};

export default AppRoutes;
