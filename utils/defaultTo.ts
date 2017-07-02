/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'
const defaultTo : any => ((a: any) => any) = defaultVal => param => (param === null || param === undefined || (<any>Number).isNaN(param)) ? defaultVal : param
export default defaultTo
