/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import curry2 from './curry2'

const path_ = (path, obj) => path.reduce((o, n) => {
  try {
    return o[n]
  }
  catch (e) {
    return null
  }
}, obj)

export default curry2(path_)