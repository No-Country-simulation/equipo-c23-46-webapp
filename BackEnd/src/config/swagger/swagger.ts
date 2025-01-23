import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import { envs } from '../envs';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'School Documentation',
      version: '1.0.0',
      description: 'API documentation for the project',
    },
    servers: [
      {
        url: envs.webserviceUrl,
      },
    ],
  },
  apis: ['./src/presentation/auth/auth.routes.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
