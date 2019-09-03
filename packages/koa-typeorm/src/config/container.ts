import { Container } from 'inversify'
import { interfaces } from 'inversify-koa'
import { TYPE, IEnvironmentConfig } from '@ensojs/framework'

import { IndexController } from '../IndexController'
import { $b } from './bindings'
import { env } from './env'

export const buildContainer = async (): Promise<Container> => {
  const container = new Container()
  container.bind<interfaces.Controller>(TYPE.Controller)
    .to(IndexController)
    .whenTargetNamed('IndexController')

  container.bind<IEnvironmentConfig>($b.Environment).toConstantValue(env)
  return container
}
