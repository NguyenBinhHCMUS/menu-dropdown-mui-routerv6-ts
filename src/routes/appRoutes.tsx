import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import SaasPage from "../pages/dashboard/SaasPage";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytics",
        },
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas",
        },
      },
    ],
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />,
    },
  },
];

export default appRoutes;
