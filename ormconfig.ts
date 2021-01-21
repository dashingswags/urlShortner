const DB_TYPE=process.env.DB_TYPE
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;

module.exports = [
    {
        "type": DB_TYPE,
        "host": DB_HOST,
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "synchronize": true,
        "dropSchema": false,
        "logging": false,
        "entities": [`${__dirname}/dist/**/*.entity{.ts,.js}`]
    }
]
