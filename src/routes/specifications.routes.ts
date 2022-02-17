import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRouter = Router();

const listSpecificationsController = new ListSpecificationController();
const createSpecificationController = new CreateSpecificationController();

specificationsRouter.use(ensureAuthenticated);

specificationsRouter.post("/", createSpecificationController.handle);

specificationsRouter.get("/", listSpecificationsController.handle);

export { specificationsRouter };
