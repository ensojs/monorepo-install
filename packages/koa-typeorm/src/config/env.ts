import dotenv from 'dotenv-safe'

// import { IEnvironmentConfig } from '@ensojs/framework'
import { IEnvironmentConfig } from './interfaces'

dotenv.config({
  allowEmptyValues: false
})

export const env: IEnvironmentConfig = {
  ENVIRONMENT: process.env.ENVIRONMENT!,
  PORT: parseInt(process.env.PORT!),
  DB_TYPE: process.env.DB_TYPE!,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL!,
}
