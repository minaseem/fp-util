/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import curry from './curry2'

const pickAll_ = (keys, obj) => keys.reduce((o, n) => {
  o[n] = obj[n]
  return o
}, {})

export default curry(pickAll_)
