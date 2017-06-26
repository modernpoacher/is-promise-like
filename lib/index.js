"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.isPromiseLike=isPromiseLike;function isPromiseLike(p){// null boop
var _ref=p||{},c=_ref.constructor,_ref$then=_ref.then;_ref$then=_ref$then===undefined?{}:_ref$then;var t=_ref$then.constructor;// = null || {}
return c===Promise/* is it a Promise? */||c===Object&&t===Function/* or is it a Promise-like object? */;}