import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { TeacherRoutes } from "./teachers/teacher.routes";


export class AppRoutes {
  static get routes():Router {
    const router = Router();

    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/teachers', TeacherRoutes.routes)

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World'
      })
    })

    return router;
  }
}
