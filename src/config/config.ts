require('dotenv').config();

const appPort = process.env.APP_PORT;
const appUrl = process.env.APP_URL;
export const config = {
    appPort,
    appUrl
}
