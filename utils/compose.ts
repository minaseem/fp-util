/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import pipeFunctions from './pipeFunctions'
import toArray from './toArray'

const compose = function () {
  const args = toArray(<any>arguments).reverse()
  return pipeFunctions(args)
}

export default compose
