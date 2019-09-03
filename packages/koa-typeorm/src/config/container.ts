import { Container } from 'inversify'
import { interfaces } from 'inversify-koa'
import { TYPE } from '@ensojs/framework'

import { IndexController } from '../IndexController'

/**
 * Our inversify container
 */
export const container = new Container()

// Public
container.bind<interfaces.Controller>(TYPE.Controller).to(IndexController).whenTargetNamed('IndexController')
