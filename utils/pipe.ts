/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

import pipeFunctions from './pipeFunctions'
import toArray from './toArray'

const pipe = function (...a: any[]) {
    const args = toArray(a)
    return pipeFunctions(args)
}

export default pipe