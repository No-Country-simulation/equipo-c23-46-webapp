import { Request, Response } from 'express';
import {
  CustomError,
  LoginUserDto,
  RegisterStudentDto,
  RegisterWorkerDto,
  UpdateCurrentUserPasswordDto,
} from '../../domain';
import { AuthService } from './auth.service';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal Server Error' });
  };

  registerStudent = (req: Request, res: Response) => {
    const [error, registerStudentDto] = RegisterStudentDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.authService
      .registerStudent(registerStudentDto!)
      .then((user) => res.status(201).json(user))
      .catch((error) => this.handleError(error, res));
  };

  registerWorker = (req: Request, res: Response) => {
    const [error, registerWorkerDto] = RegisterWorkerDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.authService
      .registerWorker(registerWorkerDto!)
      .then((worker) => res.status(201).json(worker))
      .catch((error) => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.authService
      .loginUser(loginUserDto!)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => this.handleError(error, res));
  };

  updateCurrentUserPassword = (req: Request, res: Response) => {
    const [error, updateCurrentUserPasswordDto] =
      UpdateCurrentUserPasswordDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.authService.updateCurrentUserPassword(updateCurrentUserPasswordDto!, req.user!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
}
