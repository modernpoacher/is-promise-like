export function isPromiseLike (p) { // null boop
  const {
    constructor: c,
    then: {
      constructor: t
    } = {}
  } = p || false
  return (
    c === Promise || (c === Object && t === Function)
  )
}
