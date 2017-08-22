/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import {curry} from './curry2'

export const pipeFunctions = curry((args: Function[], arg?: any) => args.reduce((o, n) => n(o), arg))
