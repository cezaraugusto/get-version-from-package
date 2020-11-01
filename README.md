[![get-version-from-package Build Status](https://github.com/cezaraugusto/get-version-from-package/workflows/CI/badge.svg)](https://github.com/cezaraugusto/get-version-from-package/actions)

> Gets you a given version from a given npm package.

## Usage

```js
const getVersionFromPackage = require('get-version-from-package')

(async () => {
  const typeScriptVersions = await getVersionFromPackage('typescript')

  console.log(typeScriptVersions)
  // {
  //   latest: '4.0.5',
  //   next: '4.1.0-dev.20201101',
  //   beta: '4.1.0-beta',
  //   rc: '4.0.1-rc',
  //   insiders: '4.0.2-insiders.20200818',
  //   'tag-for-publishing-older-releases': '3.6.5',
  //   dev: '3.9.4'
  // }

  const { latest, next, beta } = await getVersionFromPackage('typescript')

  console.log('Latest version', latest) // 5.3.2
  console.log('Next version', next) // 5.0.0-rc.6
  console.log('Beta version', beta) // 4.1.0-beta
})()
```

## API

### getPackageVersion(pkgName, outputError?)

#### pkgName

Type: `string`

The package name on npm.

#### outputError

Type: `boolean`\
Default: `false`

Set to true if you need the error message.

## License

MIT (c) Cezar Augusto.
