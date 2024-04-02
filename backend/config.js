require('dotenv').config();

const config = {
    development: {
        database: {
            host: process.env.DEVELOPMENT_DATABASE_HOST,
            port: parseInt(process.env.DEVELOPMENT_DATABASE_PORT),
            user: process.env.DEVELOPMENT_DATABASE_USER,
            password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
            database: process.env.DEVELOPMENT_DATABASE_NAME,
            waitForConnections: process.env.DEVELOPMENT_DATABASE_WAITFORCONNECTIONS === 'true',
            connectionLimit: parseInt(process.env.DEVELOPMENT_DATABASE_CONNECTIONLIMIT),
            queueLimit: parseInt(process.env.DEVELOPMENT_DATABASE_QUEUELIMIT)

        }
    },
    production: {
        
    }
};


const environment = process.env.NODE_ENV || 'development';

module.exports = config[environment];

