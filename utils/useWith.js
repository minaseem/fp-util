/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'
import toArray from './toArray'

const converge = (target, fns) => {
  return function () {
    const args = toArray(arguments)
    const output = []
    args.forEach((v, k) => output.push(fns[k](v)))
    return target.apply(null, output)
  }
}
export default converge