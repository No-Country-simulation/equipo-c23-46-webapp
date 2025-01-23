import { Request, Response } from 'express';
import { GradeService } from './grade.service';
import { CustomError, GetByIdDto } from '../../domain';

export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);

    return res.status(500).json({ error: 'Internal Server Error' });
  };

  findById = (req: Request, res: Response) => {
    const { id } = req.params;
    const [error, getByIdDto] = GetByIdDto.create({ id });
    if (error) {
      res.status(400).json({ error });
      return;
    }

    this.gradeService
      .findGradeById(getByIdDto!)
      .then((grade) => res.status(200).json(grade))
      .catch((error) => this.handleError(error, res));
  };
}
