const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'marvel_stone',
    dialect: 'mysql',
    timezone: '-03:00',
    define: {
        freezeTableName: true
    },
    logging: false
};

module.exports = dbConfig;