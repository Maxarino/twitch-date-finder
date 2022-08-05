import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../../pages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index={true} element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;