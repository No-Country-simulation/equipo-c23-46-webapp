import { Router } from 'express';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { EmailService } from '../email/email.service';
import { envs } from '../../config';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.mailerService,
      envs.mailerEmail,
      envs.mailerSecretKey,
      envs.sendEmail,
    );

    const authService = new AuthService(emailService);

    const controller = new AuthController(authService);

    router.post('/registerStudent', controller.registerStudent);
    router.post('/registerWorker', controller.registerWorker);
    router.post('/login', controller.loginUser);
    router.put(
      '/updateCurrentUserPassword',
      [AuthMiddleware.validateJWT],
      controller.updateCurrentUserPassword
    );
    router.post('/forgotPassword', controller.forgotPassword);

    return router;
  }
}
