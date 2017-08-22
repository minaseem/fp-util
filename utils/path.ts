/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import {curry} from './curry2'

const path_ = (path: string[], obj: object) => path.reduce((o, n) => {
    try {
        return (<any>o)[n]
    }
    catch (e) {
        return null
    }
}, obj)

export const path = curry(path_)