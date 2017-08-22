/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

export const toArray = <T>(param: T[]): T[] => [].splice.call(param, 0)