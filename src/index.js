const express = require('express');
const app =express();

const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');

const { User , Role } = require('./models/index')

// const db = require('./models/index');

const { PORT } = require('./config/serverConfig');

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', apiRoutes);

    app.listen(3001, async () => {
        console.log(`Server Started at port ${PORT}`);
        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }

        // manually adding user role
        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(1);
        // u1.addRole(r1);

        // to print role of user
        // const response = await u1.getRoles();
        // console.log(response);

        // to get all users of this Role
        // const response = await r1.getUsers();
        // console.log(response);

    });
}

prepareAndStartServer();