import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("ListSpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Specification Already Exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
