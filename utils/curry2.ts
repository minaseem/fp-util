/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

export const curry =  (fn: Function) : Function => {
  return function () {
    const a = arguments[0]
    if (arguments.length === 2)
      return fn.apply(null, arguments)
    else return (b: any) => fn(a, b)
  }
}