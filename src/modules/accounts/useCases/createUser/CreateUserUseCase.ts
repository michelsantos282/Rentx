import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    const driverLicenseAlreadyExists =
      await this.usersRepository.findByDriverLicense(driver_license);

    if (emailAlreadyExists || driverLicenseAlreadyExists) {
      throw new AppError("User Already Exists");
    }

    const hashedPassword = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: hashedPassword,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
