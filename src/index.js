export function isPromiseLike (p) { // null boop
  const {
    constructor: c,
    then: {
      constructor: t
    } = {}
  } = p || {} // = null || {}
  return (
    c === Promise /* is it a Promise? */ || (c === Object && t === Function) /* or is it a Promise-like object? */
  )
}
