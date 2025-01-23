import { Router } from "express";
import { TeacherService } from "./teachers.service";
import { TeacherController } from "./teachers.controller";

export class TeacherRoutes {
  static get routes(): Router {
    const router = Router();

    const teacherService = new TeacherService();
    const controller = new TeacherController(teacherService);

    router.get('/', controller.findAllTeachers);
    router.get('/:id', controller.findById);

    return router;
  }
}
