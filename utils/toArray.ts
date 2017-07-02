/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

export default <T>(param: T[]): T[] => [].splice.call(param, 0)