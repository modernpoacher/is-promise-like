const debug = require('debug')

const log = debug('is-promise-like')

const {
  env: {
    DEBUG = 'is-promise-like',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  [
    'module-resolver', {
      alias: {
        '~': '.'
      }
    }
  ]
]

function using () {
  log({ NODE_ENV })

  return NODE_ENV === 'production'
}

module.exports = (api) => {
  if (api) api.cache.using(using)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
