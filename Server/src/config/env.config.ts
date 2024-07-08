// if(
//     process.env.NODE_ENV === undefined ||
//     process.env.HOST === undefined ||
//     process.env.PORT === undefined ||
//     process.env.DATABASE_URL === undefined || 
//     process.env.USER === undefined||
//     process.env.DB_HOST === undefined||
//     process.env.DB_PORT === undefined || 
//     process.env.DATABASE === undefined
// )
// {
//     throw new Error("Enviromnent Variables are missing");
// }

const env = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT:  process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL ,
    USER: process.env.USER,
    PASSWORD: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT ,
    DATABASE: process.env.DATABASE,
}

export default env;