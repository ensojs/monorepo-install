import { Container } from 'inversify'
import Debug from 'debug'

const debug = Debug('enso:createRegistry')

import { container } from './container'
import { createConnection, Connection } from 'typeorm'
import { IEnvironmentConfig } from './interfaces'
import { $b } from './bindings'
import { env } from './env'

export const createRegistry = async (): Promise<Container> => {
  // postgres
  const connectionOptions = await require('./../../ormconfig')
  const connection = await createConnection(connectionOptions)

  // Bind Application-instance-specific values
  container.bind<IEnvironmentConfig>($b.Environment).toConstantValue(env)
  container.bind<Connection>(Connection).toConstantValue(connection)

  debug('createRegistry() - Done')
  return container
}
