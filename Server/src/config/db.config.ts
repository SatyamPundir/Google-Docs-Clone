import { Sequelize } from "sequelize-typescript"
import env from "./env.config";


const sequelize = 
    env.NODE_ENV === "test" || env.NODE_ENV === "development"
        ? new Sequelize("GoogleDocs", "postgres","root",{
            host: "localhost",
            dialect: 'postgres',
            logging: false,
        })
        : new Sequelize("postgres://postgres:root@localhost:5432/GoogleDocs", {
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        });

export default sequelize;