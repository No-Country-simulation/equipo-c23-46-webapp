import { Request, Response } from 'express';
import { CustomError, RegisterStudentDto, RegisterWorkerDto } from "../../domain";
import { AuthService } from "./auth.service";

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
  }

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
  }
}
