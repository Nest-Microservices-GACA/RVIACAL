"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envsSchema = joi.object({
    DB_HOST: joi.string().required(),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required(),
    DB_PORT: joi.number().required(),
    PORT: joi.number().required(),
    RVIA_ENVIRONMENT: joi.number().required(),
    RVIA_PATH: joi.string().required(),
    SECRET_KEY: joi.string().required(),
})
    .unknown(true);
const { error, value } = envsSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
});
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVars = value;
exports.envs = {
    dbHost: envVars.DB_HOST,
    dbUsername: envVars.DB_USERNAME,
    dbPassword: envVars.DB_PASSWORD,
    dbName: envVars.DB_NAME,
    dbPort: envVars.DB_PORT,
    port: envVars.PORT,
    RVIAEnv: envVars.RVIA_ENVIRONMENT,
    RVIAPath: envVars.RVIA_PATH,
    secretKey: envVars.SECRET_KEY,
};
//# sourceMappingURL=envs.js.map