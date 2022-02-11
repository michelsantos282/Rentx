import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();

    return response.json(specifications).send();
  }
}

export { ListSpecificationController };
