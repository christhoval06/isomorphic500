import Fluxible from "fluxible";
import fetchrPlugin from "fluxible-plugin-fetchr";
import middlewarePlugin from "fluxible-plugin-middleware";
import { RouteStore } from "fluxible-router";

import routes from "./routes";

import Application from "./containers/Application";

import FeaturedStore from "./stores/FeaturedStore";
import HtmlHeadStore from "./stores/HtmlHeadStore";
import IntlStore from "./stores/IntlStore";
import PhotoStore from "./stores/PhotoStore";

// Create the fluxible app using Application as root component
const app = new Fluxible({ component: Application });

// Make fetchr services respond to /api endpoint
app.plug(fetchrPlugin({
  xhrPath: "/api",
  xhrTimeout: 30000
}));

// const logMiddleware = actionContext => next => (type, payload) => {
//   console.log(actionContext);
//   console.info(type, payload);
//   next(type, payload);
// };
// app.plug(middlewarePlugin(logMiddleware));

// Register a fluxible RouteStore
const AppRouteStore = RouteStore.withStaticRoutes(routes);
app.registerStore(AppRouteStore);

// Register app-specific stores
app.registerStore(FeaturedStore);
app.registerStore(HtmlHeadStore);
app.registerStore(IntlStore);
app.registerStore(PhotoStore);

export default app;
