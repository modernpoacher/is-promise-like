export function isPromise (p) {
  return (p instanceof Promise)
}

export function isPromiseLike (p) { // null boop
  if (isPromise(p)) return true
  const {
    then
  } = p || false

  return (then instanceof Function)
}
