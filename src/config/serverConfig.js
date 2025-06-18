const dotenv=require('dotenv');     //we setup this file to use environment variable specific to server buildup
dotenv.config();
const bcrypt = require('bcrypt');
module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(10)
}