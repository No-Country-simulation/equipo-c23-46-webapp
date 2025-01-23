import { Router } from "express";
import { StudentServie } from "./student.service";
import { StudentConstroller } from "./student.controller";

export class StudentRoutes {
  static get routes(): Router {
    const router = Router();

    const studentService = new StudentServie();
    const controller = new StudentConstroller(studentService);

    router.get('/', controller.findAllStudents);
    router.get('/:id', controller.findById);

    return router;
  }
}
