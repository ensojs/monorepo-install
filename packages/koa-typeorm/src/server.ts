import 'reflect-metadata'

import { App } from './App'
import Debug from 'debug'

const debug = Debug('enso:server')

import { env } from './config/env'
import { createRegistry } from './config/registry'

(async () => {
  try {
    debug('============================================')
    debug('> Starting server...')
    debug('============================================')


    debug('> Creating registry for dependency injection')
    const container = await createRegistry()

    const app = new App(env)
    await app.build(container)
    await app.start()


    debug('')
    debug('✔ [nodejs] %s', process.version)
    debug('')
    debug(
      '✔ API server listening on port %d in [%s] mode',
      env.PORT,
      env.ENVIRONMENT
    )
    // debug('✔ API version %s', pkg.version)
  } catch (e) {
    debug(e)
    process.exit(1)
  }
})()
