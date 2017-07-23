/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import curry2 from './curry2'

const prop_ = (prop: string, obj: any): any => obj ? obj[prop] : undefined

export default curry2(prop_)
