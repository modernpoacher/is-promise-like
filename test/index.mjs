import {
  expect
} from 'chai'

import {
  isPromiseLike
} from '#is-promise-like'

class S {
  static then () {}
}

class I {
  then () {}
}

class C {}

describe('isPromiseLike', () => {
  describe('A function for identifying Promise instances and Promise-like objects', () => {
    it('Exists', () => (
      expect(isPromiseLike)
        .to.exist
    ))
  })

  describe('Invoked with a Promise instance', () => {
    it('Can be invoked with "new Promise(() => {})"', () => (
      expect(isPromiseLike(new Promise(() => {})))
        .to.be.true
    ))

    it('Can be invoked with "Promise.all([])"', () => (
      expect(isPromiseLike(Promise.all([])))
        .to.be.true
    ))

    it('Can be invoked with "Promise.resolve({})"', () => (
      expect(isPromiseLike(Promise.resolve({})))
        .to.be.true
    ))
  })

  describe('Invoked without Promise instances', () => {
    describe('Which are Promise-like', () => {
      const s = new S()
      const i = new I()
      const o = {}
      const a = []

      o.then = () => {}
      a.then = () => {}

      it('Can be invoked with static methods on an uninstantiated class', () => (
        expect(isPromiseLike(S))
          .to.be.true
      ))

      it('Can be invoked with static methods on an instantiated class', () => (
        expect(isPromiseLike(s))
          .to.be.false
      ))

      it('Can be invoked with methods on an uninstantiated class', () => (
        expect(isPromiseLike(I))
          .to.be.false
      ))

      it('Can be invoked with methods on an instantiated class', () => (
        expect(isPromiseLike(i))
          .to.be.true
      ))

      it('Can be invoked with methods on an object literal', () => (
        expect(isPromiseLike(o))
          .to.be.true
      ))

      it('Can be invoked with an object literal', () => (
        expect(isPromiseLike({}))
          .to.be.false
      ))

      it('Can be invoked with methods on an array literal', () => (
        expect(isPromiseLike(a))
          .to.be.true
      ))

      it('Can be invoked with an array literal', () => (
        expect(isPromiseLike([]))
          .to.be.false
      ))
    })

    describe('Which are not Promise-like', () => {
      const a = () => {}
      const fA = function () {}
      function fB () {}
      const c = new C()

      const s = new String()
      const n = new Number()
      const b = new Boolean()
      const d = new Date()
      const x = new RegExp()

      it('Can be invoked implicitly with "undefined"', () => (
        expect(isPromiseLike())
          .to.be.false
      ))

      it('Can be invoked explicitly with "undefined"', () => (
        expect(isPromiseLike(undefined))
          .to.be.false
      ))

      it('Can be invoked with "null"', () => (
        expect(isPromiseLike(null))
          .to.be.false
      ))

      it('Can be invoked with a positive integer', () => (
        expect(isPromiseLike(+1))
          .to.be.false
      ))

      it('Can be invoked with a negative integer', () => (
        expect(isPromiseLike(-1))
          .to.be.false
      ))

      it('Can be invoked with zero', () => (
        expect(isPromiseLike(0))
          .to.be.false
      ))

      it('Can be invoked with "true"', () => (
        expect(isPromiseLike(true))
          .to.be.false
      ))

      it('Can be invoked with "false"', () => (
        expect(isPromiseLike(false))
          .to.be.false
      ))

      it('Can be invoked with a string literal', () => (
        expect(isPromiseLike(''))
          .to.be.false
      ))

      it('Can be invoked with an arrow function', () => (
        expect(isPromiseLike(a))
          .to.be.false
      ))

      it('Can be invoked with a function expression', () => (
        expect(isPromiseLike(fA))
          .to.be.false
      ))

      it('Can be invoked with a function definition', () => (
        expect(isPromiseLike(fB))
          .to.be.false
      ))

      it('Can be invoked with a constructed instance', () => (
        expect(isPromiseLike(c))
          .to.be.false
      ))

      it('Can be invoked with a string instance', () => (
        expect(isPromiseLike(s))
          .to.be.false
      ))

      it('Can be invoked with a number instance', () => (
        expect(isPromiseLike(n))
          .to.be.false
      ))

      it('Can be invoked with a boolean instance', () => (
        expect(isPromiseLike(b))
          .to.be.false
      ))

      it('Can be invoked with a date instance', () => (
        expect(isPromiseLike(d))
          .to.be.false
      ))

      it('Can be invoked with a regular expression instance', () => (
        expect(isPromiseLike(x))
          .to.be.false
      ))
    })
  })
})
