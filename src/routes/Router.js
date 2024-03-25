import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Login = lazy(() => import("../pages/LoginPage.js"));
const Join = lazy(() => import("../pages/JoinPage.js"));
const About = lazy(() => import("../views/About.js"));
const Starter1 = lazy(() => import("../views/Starter1.js"));
const Starter2 = lazy(() => import("../views/Starter2.js"));
const Starter3 = lazy(() => import("../views/Starter3.js"));
const Starter4 = lazy(() => import("../views/Starter4.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

// 인증된 사용자인지 확인하는 함수
const isAuthenticated = () => {
  const token = localStorage.getItem("Accesstoken");
  console.log("Accesstoken 파싱 성공 " + token);
  return token ? true : false;
};

// 페이지에 대한 라우트를 보호하는 컴포넌트
const RouteGuard = ({ component }) => {
  return isAuthenticated() ? component : <LoginRequiredPage />;
};

const LoginRequiredPage = () => {
  return (
    <div>
      <h3>로그인이 필요한 서비스입니다.</h3>

      <Login />
    </div>
  );
};

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <RouteGuard component={<Starter1 />} /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/join", exact: true, element: <Join /> },
      {
        path: "/starter1",
        exact: true,
        element: <RouteGuard component={<Starter1 />} />,
      },
      {
        path: "/starter2",
        exact: true,
        element: <RouteGuard component={<Starter2 />} />,
      },
      {
        path: "/starter3",
        exact: true,
        element: <RouteGuard component={<Starter3 />} />,
      },
      {
        path: "/starter4",
        exact: true,
        element: <RouteGuard component={<Starter4 />} />,
      },
      {
        path: "/about",
        exact: true,
        element: <RouteGuard component={<About />} />,
      },
      {
        path: "/alerts",
        exact: true,
        element: <RouteGuard component={<Alerts />} />,
      },
      {
        path: "/badges",
        exact: true,
        element: <RouteGuard component={<Badges />} />,
      },
      {
        path: "/buttons",
        exact: true,
        element: <RouteGuard component={<Buttons />} />,
      },
      {
        path: "/cards",
        exact: true,
        element: <RouteGuard component={<Cards />} />,
      },
      {
        path: "/grid",
        exact: true,
        element: <RouteGuard component={<Grid />} />,
      },
      {
        path: "/table",
        exact: true,
        element: <RouteGuard component={<Tables />} />,
      },
      {
        path: "/forms",
        exact: true,
        element: <RouteGuard component={<Forms />} />,
      },
      {
        path: "/breadcrumbs",
        exact: true,
        element: <RouteGuard component={<Breadcrumbs />} />,
      },
    ],
  },
];

export default ThemeRoutes;
