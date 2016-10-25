/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'
import curry2 from './curry2'

export default curry2((args, arg) => args.reduce((o, n) => n(o), arg))
