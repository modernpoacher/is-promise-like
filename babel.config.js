const debug = require('debug')

const log = debug('is-promise-like')

const {
  env: {
    DEBUG = 'is-promise-like',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

function env () {
  log({ NODE_ENV })

  return NODE_ENV === 'production'
}

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

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
