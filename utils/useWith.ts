/**
 * Created by imamudin.naseem on 26/10/16.
 */

'use strict'
import {toArray} from './toArray'

export const useWith: (a: Function, b: Function[]) => Function = (target, fns) => {
    return function (...a: any[]) {
        const args = toArray(a)
        const output: any[] = []
        args.forEach((v: any, k: number) => output.push(fns[k](v)))
        return target.apply(null, output)
    }
}
// export default useWith