/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

export default fn => {
  return function () {
    const a = arguments[0]
    if (arguments.length === 2)
      return fn.apply(null, arguments)
    else return b => fn(a, b)
  }
}