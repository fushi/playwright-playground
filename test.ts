import * as fs from 'fs'

import { test } from '@playwright/test'

const storageStatePath = 'storageStateFile'

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage()

  await page.context().storageState({ path: storageStatePath })
  await page.close()
})

test.afterAll(() => {
  if (fs.existsSync(storageStatePath)) {
    fs.unlinkSync(storageStatePath)
  }
})

test.describe('Outer Describe to wrap test.use in', () => {
  test.use({ storageState: storageStatePath })

  test('Test that should use storageState', () => {

  })
})