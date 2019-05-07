import dotenv from 'dotenv-safe'
import { IEnvironmentConfig } from '@enso-ts/framework'

dotenv.config({
  allowEmptyValues: false
})

export const env: IEnvironmentConfig = {
  ENVIRONMENT: process.env.ENVIRONMENT!,
  PORT: parseInt(process.env.PORT!)
}
