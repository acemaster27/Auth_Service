const dotenv=require('dotenv');     //we setup this file to use environment variable specific to server buildup
dotenv.config();
module.exports = {
    PORT: process.env.PORT
}