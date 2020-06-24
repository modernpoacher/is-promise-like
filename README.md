# IsPromiseLike

## Usage with JS
```javascript
const {
  isPromise,
  isPromiseLike
} = require('is-promise-like')
```

## Usage with ES
```javascript
import {
  isPromise,
  isPromiseLike
} from 'is-promise-like'
```

`isPromise` identifies instances of the global `Promise` class.

`isPromiseLike` identifies instances of the global `Promise` class or other objects which are _like_ them.

### Examples: `isPromise`

Returns `true`:

```javascript
const p = new Promise(() => {})

isPromise(p) // true
```
```javascript
const p = Promise.resolve({})

isPromise(p) // true
```
```javascript
const p = Promise.all([])

isPromise(p) // true
```

Anything else should return `false`.

### Examples: `isPromiseLike`

All of the preceding examples returning `true`. In addition:

```javascript
class S { 
  static then () {}
} 

isPromiseLike(S) // true
```
```javascript
class S { 
  then () {}
} 

const s = new S()

isPromiseLike(s) // true
```
```javascript
const o = {}
o.then = () => {}

isPromiseLike(o) // true
```
```javascript
const a = []
a.then = () => {}

isPromiseLike(a) // true
```
And similar constructions for other types. Anything else should return `false`.
