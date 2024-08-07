import { Router } from "express";

import { routerUser } from "./users.routes";
import { routerTechnologies } from "./technologies.routes";



const routes = Router();

routes.use(routerUser);
routes.use(routerTechnologies);

export { routes };