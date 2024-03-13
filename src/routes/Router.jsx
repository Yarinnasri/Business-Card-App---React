import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardsPage from "../cards/pages/CardsPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import UserCardsPage from "../cards/pages/UserCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import UserFavoriteCardsPage from "../cards/pages/UserFavoriteCardsPage";
import EditUserCardPage from "../cards/pages/EditUserCardPage";
import EditUserInfo from "../users/pages/EditUserInfo";
import UserProfile from "../users/pages/UserProfile";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />}></Route>
      <Route
        path={ROUTES.FAV_CARDS}
        element={<UserFavoriteCardsPage />}
      ></Route>
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />}></Route>
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />}></Route>

      <Route path={ROUTES.MY_CARDS} element={<UserCardsPage />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
      <Route
        path={`${ROUTES.CARD_DETAILS}/:id`}
        element={<CardDetailsPage></CardDetailsPage>}
      ></Route>
      <Route
        path={`${ROUTES.EDIT_CARD}/:id`}
        element={<EditUserCardPage />}
      ></Route>
      <Route path={ROUTES.EDIT_USER} element={<EditUserInfo />}></Route>
      <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      <Route path={ROUTES.SANDBOX} element={<></>}>
        <Route path="crm" element={<></>}></Route>
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
