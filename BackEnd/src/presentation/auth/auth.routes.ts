import { Router } from 'express';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthService();

    const controller = new AuthController(authService);

    router.post('/registerStudent', controller.registerStudent);
    router.post('/registerWorker', controller.registerWorker);
    router.post('/login', controller.loginUser);
    router.put(
      '/updateCurrentUserPassword',
      [AuthMiddleware.validateJWT],
      controller.updateCurrentUserPassword
    );

    return router;
  }
}
