import { Request, Response } from 'express';
import { StudentServie } from './student.service';
import { CustomError, GetByIdDto, PaginationDto } from '../../domain';

export class StudentConstroller {
  constructor(private readonly studentServie: StudentServie) {}

    private handleError = (error: unknown, res: Response) => {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
      }

      console.log(`${error}`);

      return res.status(500).json({ error: 'Internal Server Error' });
    };

    findAllStudents = (req: Request, res: Response) => {
      const { page = 1, limit = 10 } = req.query;

      const [error, paginationDto] = PaginationDto.create(+page, +limit!);
      if (error) {
        res.status(400).json({ error });
        return;
      }

      this.studentServie
        .findAllStudents(paginationDto!)
        .then((students) => res.status(200).json(students))
        .catch((error) => this.handleError(error, res));
    };

    findById = (req: Request, res: Response) => {
      const { id } = req.params;
      const [error, getByIdDto] = GetByIdDto.create({ id });
      if (error) {
        res.status(400).json({ error });
        return;
      }

      this.studentServie
        .getStudentById(getByIdDto!)
        .then((student) => res.status(200).json(student))
        .catch((error) => this.handleError(error, res));
    };
}
