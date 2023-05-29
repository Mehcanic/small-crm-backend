import express from 'express';
import cors from 'cors';
import customerRoutes from '../routes/customerRoutes';

const configureApp = (app: express.Application) => {
  // enable CORS
  app.use(cors());

  // enable request pasing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

}

// Routes for the app
const configureRoutes = (app: express.Application) => {
  // TODO add routes
  app.use('/api/customers', customerRoutes);
}

const createServer = () => {
  const app = express();

  configureApp(app);
  configureRoutes(app);
  return app;
}

export default createServer;