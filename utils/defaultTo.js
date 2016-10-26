/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'

export default defaultVal => param => (param === null || param === undefined || Number.isNaN(param)) ? defaultVal : param
