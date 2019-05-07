import { IEnvironmentConfig } from '@enso-ts/framework'
import { injectable, inject } from 'inversify'
import { interfaces, controller, httpGet } from 'inversify-koa'
import * as Router from 'koa-router'

import { $b } from './config/bindings'

const pkg = require('../package.json')

@injectable()
@controller('/')
export class IndexController implements interfaces.Controller {

  constructor (
    @inject($b.Environment) private env: IEnvironmentConfig
  ) {}

  /**
   * GET /
   */
  @httpGet('')
  async getIndex (ctx: Router.IRouterContext) {
    ctx.status = 200
    ctx.body = {
      name: pkg.name,
      version: pkg.version,
      env: this.env.ENVIRONMENT,
      up: process.uptime(),
      message: 'ok'
    }
  }
}
