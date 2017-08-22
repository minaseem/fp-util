/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import {curry} from './curry2'

const pickAll_ = (keys: string[], obj: object) => keys.reduce((o, n) => {
    (<any>o)[n] = (<any>obj)[n]
    return o
}, {})

export const pickAll =  curry(pickAll_)
