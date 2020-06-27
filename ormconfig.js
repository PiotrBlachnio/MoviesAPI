module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "postgres",
    "synchronize": true,
    "logging": false,
    "entities": ["src/entity/**/*"],
    "migrations": ["src/migration/**/*"],
    "subscribers": ["src/subscriber/**/*"],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
    }
}