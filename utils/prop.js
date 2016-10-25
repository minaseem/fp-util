/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import curry2 from './curry2'

const prop_ = (prop, obj) => obj ? obj[prop] : undefined

export default curry2(prop_)
