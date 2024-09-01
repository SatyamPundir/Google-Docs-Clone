import express, { Express } from 'express';
import dotenv from 'dotenv';
import db from './db/models';
import router from './routes';
import cors from 'cors';
import errorHandler from './middleware/error-handler';

dotenv.config();

const app: Express = express();
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "https://frontend-one-mocha.vercel.app", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Add the HTTP methods you expect
    allowedHeaders: ["Content-Type", "Authorization"], // Add the headers you expect
    credentials: true, // If you need to allow credentials
  })
);

// Handle preflight requests
app.options('*', cors());

const port: number = 8080;

app.use(router);
app.use(errorHandler);

db.sequelize.sync();

// Exporting the app for server.ts
export default app;
