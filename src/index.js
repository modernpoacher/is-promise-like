const debug = require('debug')

const log = debug('is-promise-like')

const {
  env: {
    DEBUG = 'is-promise-like'
  }
} = process

debug.enable(DEBUG)

export function isPromise (p) {
  log('isPromise')

  return (p instanceof Promise)
}

export function isPromiseLike (p) {
  log('isPromiseLike')

  if (isPromise(p)) return true
  const {
    then
  } = p || false

  return (then instanceof Function)
}
