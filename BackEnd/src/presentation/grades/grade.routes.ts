
import { Router } from "express";
import { GradeService } from "./grade.service";
import { GradeController } from "./grade.controller";


export class GradeRoutes {
  static get routes(): Router {
    const router = Router();

    const gradeService = new GradeService();
    const controller = new GradeController(gradeService);

    router.get('/:id', controller.findById);

    return router;
  }
}
