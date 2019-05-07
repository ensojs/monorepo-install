import { TestHarness } from '@enso-ts/framework'
import { buildTestHarness } from '../utils/buildTestHarness'

describe('IndexController', () => {

  let harness: TestHarness

  beforeAll(async () => {
    harness = await buildTestHarness()
    await harness.setup()
  })

  afterAll(async () => {
    await harness.destroy()
  })

  test('IndexController', async () => {
    const { body } = await harness.request.get('/')
    expect(body).toBeDefined()
  })

})
