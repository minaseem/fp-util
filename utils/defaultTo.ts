/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'
interface Number_ {
    isNaN: Function
}
declare var Number: Number_;

const defaultTo = (defaultVal: any): Function => (param: any) => (param === null || param === undefined || Number.isNaN(param)) ? defaultVal : param
export default defaultTo
