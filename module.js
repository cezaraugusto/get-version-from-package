const fetch = require('node-fetch')
const { execSync } = require('child_process')

module.exports = async function getVersionFromPackage (pkgName, outputError) {
  const registry = 'https://registry.npmjs.org'
  const onTagsURL = await fetch(`${registry}/-/package/${pkgName}/dist-tags`)

  try {
    const response = await onTagsURL
    const body = await response.text()
    return JSON.parse(body)
  } catch (error) {
    try {
      return execSync(`npm view ${pkgName} version`).toString().trim()
    } catch (execError) {
      if (outputError) {
        throw new Error(`Can't get latest tag from ${pkgName}. Reason`, error)
      }
      return null
    }
  }
}
