/* global describe, test, expect */
const getVersionFromPackage = require('./module')

describe('getVersionFromPackage', () => {
  test('gets next package version', async () => {
    expect.assertions(1)
    const { next } = await getVersionFromPackage('typescript')
    expect(next).not.toBe(undefined)
  })
  test('gets latest package version', async () => {
    expect.assertions(1)
    const { latest } = await getVersionFromPackage('typescript')
    expect(latest).not.toBe(undefined)
  })
  test('gets beta package version', async () => {
    expect.assertions(1)
    const { beta } = await getVersionFromPackage('typescript')
    expect(beta).not.toBe(undefined)
  })
})
