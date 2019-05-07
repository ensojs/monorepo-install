import 'reflect-metadata'

import { TestHarness } from '@enso/framework'

import { App } from '../../src/App'
import { env } from '../../src/config/env'
import { buildContainer } from '../../src/config/container'

export async function buildTestHarness (): Promise<TestHarness> {
  // build the container
  const container = await buildContainer()

  // build the app
  const app = new App(env)
  await app.build(container)

  // pass it into the test harness
  return new TestHarness(app)
}
