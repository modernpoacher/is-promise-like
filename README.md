# IsPromiseLike

## Usage with JS
```
const {
  isPromise,
  isPromiseLike
} = require('is-promise-like')
```

## Usage with ES
```
import {
  isPromise,
  isPromiseLike
} from 'is-promise-like'
```

`isPromise` identifies instances of the global `Promise` class.

`isPromiseLike` identifies instances of the global `Promise` class, and other objects which are _like_ them.

### Examples: `isPromise`

Returns `true`:

```
const p = new Promise(() => {})

isPromise(p) // true
```
```
const p = Promise.resolve({})

isPromise(p) // true
```
```
const p = Promise.all([])

isPromise(p) // true
```

Anything else should return `false`.

### Examples: `isPromiseLike`

All of the preceding examples returning `true`. In addition:

```
class S { 
  static then () {}
} 

isPromiseLike(S) // true
```
```
class S { 
  then () {}
} 

const s = new S()

isPromiseLike(s) // true
```
```
const o = {}
o.then = () => {}

isPromiseLike(o) // true
```
```
const a = []
a.then = () => {}

isPromiseLike(a) // true
```
And similar constructions for other types. Anything else should return `false`.
