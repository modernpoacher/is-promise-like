/* eslint-env node, mocha */

import {
  expect
} from 'chai'

import {
  isPromiseLike
} from '../../src'

describe('isPromiseLike', () => {
  describe('Invoked with Promise instances', () => {
    it('Can be invoked with a Promise instance', () => {
      expect(isPromiseLike(new Promise(() => {})))
        .to.be.true
    })

    it('Can be invoked with Promise.all([])', () => {
      expect(isPromiseLike(Promise.all([])))
        .to.be.true
    })

    it('Can be invoked with Promise.resolve({})', () => {
      expect(isPromiseLike(Promise.resolve({})))
        .to.be.true
    })
  })

  describe('Invoked without Promise instances', () => {
    describe('Which are Promise-like', () => {
      class S {
        static then () {}
      }

      class I {
        then () {}
      }

      let s
      let p
      let o
      let a
      beforeEach(() => {
        s = new S()
        p = new I()
        o = {}
        o.then = () => {}
        a = []
        a.then = () => {}
      })

      it('Can be invoked with static methods on an uninstantiated class', () => {
        expect(isPromiseLike(S))
          .to.be.true
      })

      it('Can be invoked with static methods on an instantiated class', () => {
        expect(isPromiseLike(s))
          .to.be.false
      })

      it('Can be invoked with methods on an uninstantiated class', () => {
        expect(isPromiseLike(I))
          .to.be.false
      })

      it('Can be invoked with methods on an instantiated class', () => {
        expect(isPromiseLike(p))
          .to.be.true
      })

      it('Can be invoked with methods on an object literal', () => {
        expect(isPromiseLike(o))
          .to.be.true
      })

      it('Can be invoked with an object literal', () => {
        expect(isPromiseLike({}))
          .to.be.false
      })

      it('Can be invoked with methods on an array literal', () => {
        expect(isPromiseLike(a))
          .to.be.true
      })

      it('Can be invoked with an array literal', () => {
        expect(isPromiseLike([]))
          .to.be.false
      })
    })

    describe('Which are not Promise-like', () => {
      it('Can be invoked implicitly with "undefined"', () => {
        expect(isPromiseLike())
          .to.be.false
      })

      it('Can be invoked explicitly with "undefined"', () => {
        expect(isPromiseLike(undefined))
          .to.be.false
      })

      it('Can be invoked with "null"', () => {
        expect(isPromiseLike(null))
          .to.be.false
      })

      it('Can be invoked with a positive integer', () => {
        expect(isPromiseLike(+1))
          .to.be.false
      })

      it('Can be invoked with a negative integer', () => {
        expect(isPromiseLike(-1))
          .to.be.false
      })

      it('Can be invoked with zero', () => {
        expect(isPromiseLike(0))
          .to.be.false
      })

      it('Can be invoked with "true"', () => {
        expect(isPromiseLike(true))
          .to.be.false
      })

      it('Can be invoked with "false"', () => {
        expect(isPromiseLike(false))
          .to.be.false
      })

      it('Can be invoked with an arrow function', () => {
        expect(isPromiseLike(() => {}))
          .to.be.false
      })

      it('Can be invoked with a function definition', () => {
        expect(isPromiseLike(function () {}))
          .to.be.false
      })

      it('Can be invoked with a constructed instance', () => {
        expect(isPromiseLike(new (function () {})))
          .to.be.false
      })

      it('Can be invoked with an object literal', () => {
        expect(isPromiseLike({}))
          .to.be.false
      })

      it('Can be invoked with an array literal', () => {
        expect(isPromiseLike([]))
          .to.be.false
      })
    })
  })
})
