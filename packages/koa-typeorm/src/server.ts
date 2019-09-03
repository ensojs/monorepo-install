import 'reflect-metadata'

import { App } from './App'
import { env } from './config/env'
import { buildContainer } from './config/container'

(async () => {
  try {
    console.log('============================================')
    console.log('> Starting server...')
    console.log('============================================')

    const container = await buildContainer()

    const app = new App(env)
    await app.build(container)
    await app.start()

    console.log('')
    console.log('✔ [nodejs] %s', process.version)
    console.log('')
    console.log(
      '✔ API server listening on port %d in [%s] mode',
      env.PORT,
      env.ENVIRONMENT
    )

  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()
