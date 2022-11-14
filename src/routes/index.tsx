import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./appRoutes";
import { RouteType } from "./config";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) =>
    route.index ? (
      <Route
        key={index}
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      />
    ) : (
      <Route
        key={index}
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
      >
        {route.child && generateRoute(route.child)}
      </Route>
    )
  );
};

export const routes: ReactNode = generateRoute(appRoutes);
