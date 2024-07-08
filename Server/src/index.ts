import express , {Express, Request,Response} from 'express'
import dotenv from "dotenv"
import db from './db/models';
import router from './routes';
import cors from 'cors';
import errorHandler from './middleware/error-handler';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port:number = 8080;

app.use(express.json());
app.use(router);
app.use(errorHandler);
db.sequelize.sync();

// app.get("/", (req:Request, res:Response) => {
//     res.send("Express + TypeScript server111");
// })

// app.listen(port,()=>{
//     console.log(`Server is running on port no: ${port}`);
// })

export default app;