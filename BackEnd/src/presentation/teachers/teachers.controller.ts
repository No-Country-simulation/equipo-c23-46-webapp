import { Request, Response } from 'express';
import { TeacherService } from './teachers.service';
import { CustomError, GetByIdDto, PaginationDto } from '../../domain';

export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal Server Error' });
  };

  findAllTeachers = (req: Request, res: Response) => {
    console.log(req.query);

    const { page = 1, limit = 10 } = req.query;

    const [error, paginationDto] = PaginationDto.create(+page, +limit!);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.teacherService
      .findAllTeachers(paginationDto!)
      .then((teachers) => res.status(200).json(teachers))
      .catch((error) => this.handleError(error, res));
  };

  findById = (req: Request, res: Response) => {
    const { id } = req.params;

    const [error, getByIdDto] = GetByIdDto.create({ id });
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.teacherService
      .getTeacherById(getByIdDto!)
      .then((teacher) => res.status(200).json(teacher))
      .catch((error) => this.handleError(error, res));
  };
}
